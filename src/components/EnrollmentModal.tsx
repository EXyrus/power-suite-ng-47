import { useState } from "react";
import { usePaystackPayment } from "react-paystack";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseName: string;
  coursePrice: string;
}

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
});

export const EnrollmentModal = ({ isOpen, onClose, courseName, coursePrice }: EnrollmentModalProps) => {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

  const config = {
    reference: new Date().getTime().toString(),
    email: form.watch("email"),
    amount: parseInt(coursePrice.replace(/[^0-9]/g, "")) * 100, // Convert price string to number
    publicKey: "YOUR_PAYSTACK_PUBLIC_KEY",
  };

  const initializePayment = usePaystackPayment(config);

  const onSuccess = () => {
    // Send confirmation email
    sendConfirmationEmail({
      email: form.getValues("email"),
      fullName: form.getValues("fullName"),
      courseName,
    });
    
    toast({
      title: "Payment Successful",
      description: "You will receive a confirmation email shortly with course details.",
    });
    
    onClose();
  };

  const onError = () => {
    toast({
      variant: "destructive",
      title: "Payment Failed",
      description: "Please try again or contact support.",
    });
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsProcessing(true);
    initializePayment(onSuccess, onError);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Enroll in {courseName}</DialogTitle>
          <DialogDescription>
            Please provide your details to complete the enrollment process.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="pt-4">
              <Button type="submit" className="w-full" disabled={isProcessing}>
                {isProcessing ? "Processing..." : `Pay ${coursePrice}`}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};