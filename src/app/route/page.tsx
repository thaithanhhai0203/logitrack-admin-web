import { Button } from "@/components/ui/button";
import { RouteHeader } from "@/features/route/components/RouteHeader";
import { RouteList } from "@/features/route/components/RouteList";
import { RouteStatusTabs } from "@/features/route/components/RouteStatusTabs";


export default function RoutesPage() {
    return (
        <div className="space-y-6">
            <RouteHeader/>

            <RouteStatusTabs />
            <RouteList />
        </div>
    );
}
