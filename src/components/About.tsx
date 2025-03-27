
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                alt="Hàng hải Việt Nam"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-maritime-gold/20 rounded-full blur-2xl"></div>
          </div>
          
          <div>
            <h3 className="text-maritime-navy mb-6">Về chúng tôi</h3>
            <p className="text-gray-600 mb-4 text-lg">
              Với hơn 20 năm kinh nghiệm trong lĩnh vực hàng hải, chúng tôi tự hào là đơn vị tiên phong trong việc cung cấp các dịch vụ hàng hải chất lượng cao tại Việt Nam.
            </p>
            <p className="text-gray-600 mb-6">
              Đội ngũ chuyên gia của chúng tôi bao gồm những người có kinh nghiệm sâu rộng trong ngành hàng hải, luôn cam kết mang đến những dịch vụ tốt nhất và giải pháp phù hợp nhất cho khách hàng.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-maritime-light p-4 rounded-lg">
                <div className="text-maritime-teal font-bold text-3xl mb-2">200+</div>
                <div className="text-gray-600">Đối tác toàn cầu</div>
              </div>
              <div className="bg-maritime-light p-4 rounded-lg">
                <div className="text-maritime-teal font-bold text-3xl mb-2">1000+</div>
                <div className="text-gray-600">Dự án thành công</div>
              </div>
              <div className="bg-maritime-light p-4 rounded-lg">
                <div className="text-maritime-teal font-bold text-3xl mb-2">50+</div>
                <div className="text-gray-600">Quốc gia hoạt động</div>
              </div>
              <div className="bg-maritime-light p-4 rounded-lg">
                <div className="text-maritime-teal font-bold text-3xl mb-2">24/7</div>
                <div className="text-gray-600">Hỗ trợ khách hàng</div>
              </div>
            </div>
            
            <Button className="bg-maritime-teal hover:bg-maritime-teal/90 text-white flex items-center gap-2">
              Tìm hiểu thêm <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
