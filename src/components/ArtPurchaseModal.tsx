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

interface ArtPurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  artworkTitle: string;
  artworkPrice: string;
  artist: string;
}

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  shippingAddress: z.string().min(10, "Please provide a complete shipping address"),
});

export function ArtPurchaseModal({
  isOpen,
  onClose,
  artworkTitle,
  artworkPrice,
  artist,
}: ArtPurchaseModalProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      shippingAddress: "",
    },
  });

  const config = {
    reference: new Date().getTime().toString(),
    email: form.watch("email"),
    amount: parseInt(artworkPrice.replace(/[^0-9]/g, "")) * 100,
    publicKey: "pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  };

  const initializePayment = usePaystackPayment(config);

  const handlePurchaseConfirmation = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_KEY",
          subject: `Art Purchase Confirmation - ${artworkTitle}`,
          from_name: "Power Suite Art Gallery",
          to_email: values.email,
          message: `Thank you for purchasing ${artworkTitle} by ${artist}. Your artwork will be shipped to: ${values.shippingAddress}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send confirmation email");
      }
    } catch (error) {
      console.error("Error sending confirmation email:", error);
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsProcessing(true);
    
    initializePayment({
      onSuccess: async () => {
        await handlePurchaseConfirmation(values);
        toast({
          title: "Purchase Successful",
          description: "Your artwork purchase has been confirmed. Check your email for details.",
        });
        onClose();
      },
      onClose: () => {
        toast({
          title: "Payment Cancelled",
          description: "You have cancelled the payment.",
          variant: "destructive",
        });
      },
    });
    
    setIsProcessing(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Purchase {artworkTitle}</DialogTitle>
          <DialogDescription>
            By {artist}
            <div className="mt-2 p-2 bg-purple-50 text-purple-800 rounded-md text-sm">
              Price: {artworkPrice}
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
              name="shippingAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Shipping Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your complete shipping address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="pt-4">
              <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600" disabled={isProcessing}>
                {isProcessing ? "Processing..." : `Purchase ${artworkPrice}`}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}