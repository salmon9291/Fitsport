
import Header from "@/components/Header";
import SubscriptionCard from "@/components/SubscriptionCard";
import { useQuery } from "@tanstack/react-query";

export default function SubscriptionPage() {
  const { data: user } = useQuery({
    queryKey: ["/api/auth/user"],
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SubscriptionCard currentPlan={user?.subscriptionPlan || "free"} />
    </div>
  );
}
