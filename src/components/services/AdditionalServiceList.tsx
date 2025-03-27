
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AdditionalService } from "@/data/servicesData";
import { LucideIcon } from "lucide-react";

interface AdditionalServiceListProps {
  services: AdditionalService[];
}

const AdditionalServiceList = ({ services }: AdditionalServiceListProps) => {
  return (
    <section className="py-16 bg-maritime-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-maritime-deep-blue mb-4">Dịch vụ bổ sung</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ngoài các dịch vụ chính, chúng tôi còn cung cấp nhiều dịch vụ hỗ trợ khác.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon as LucideIcon;
            
            return (
              <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="mb-2">
                    <IconComponent className="h-10 w-10 text-maritime-gold" />
                  </div>
                  <CardTitle className="text-maritime-navy">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServiceList;
