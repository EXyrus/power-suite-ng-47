import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { usePaystackPayment } from "react-paystack";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseName: string;
  coursePrice: string;
}

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  paymentMethod: z.enum(["paystack", "flutterwave"]),
});

export function EnrollmentModal({
  isOpen,
  onClose,
  courseName,
  coursePrice,
}: EnrollmentModalProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      paymentMethod: "paystack",
    },
  });

  const config = {
    reference: new Date().getTime().toString(),
    email: form.watch("email"),
    amount: parseInt(coursePrice.replace(/[^0-9]/g, "")) * 100, // Convert price to kobo
    publicKey: "pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", // Replace with your Paystack public key
  };

  const initializePayment = usePaystackPayment(config);

  const onSuccess = () => {
    toast({
      title: "Payment Successful",
      description: "You have successfully enrolled in the course.",
    });
    onClose();
  };

  const handlePaymentCancelled = () => {
    toast({
      title: "Payment Cancelled",
      description: "You have cancelled the payment.",
      variant: "destructive",
    });
  };

  const handleFlutterwavePayment = async () => {
    // Initialize Flutterwave payment
    // This is a placeholder - you'll need to implement the actual Flutterwave integration
    toast({
      title: "Flutterwave Payment",
      description: "Flutterwave payment integration will be implemented soon.",
    });
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsProcessing(true);
    
    if (values.paymentMethod === "paystack") {
      initializePayment(onSuccess, handlePaymentCancelled);
    } else {
      await handleFlutterwavePayment();
    }
    
    setIsProcessing(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Enroll in {courseName}</DialogTitle>
          <DialogDescription>
            Please provide your details to complete the enrollment process.
            <div className="mt-2 p-2 bg-yellow-50 text-yellow-800 rounded-md text-sm">
              Demo Mode: Choose your preferred payment method.
            </div>
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
            <FormField
              control={form.control}
              name="paymentMethod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Payment Method</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="paystack">Paystack</SelectItem>
                      <SelectItem value="flutterwave">Flutterwave</SelectItem>
                    </SelectContent>
                  </Select>
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
}