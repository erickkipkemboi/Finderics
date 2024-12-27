import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="flex justify-center items-center py-10 bg-gray-50">
      <div className="max-w-3xl w-full px-6">
        <Card className="bg-white shadow-lg rounded-lg">
          <CardHeader className="text-center py-5">
            <h2 className="text-3xl font-semibold text-gray-800">Contact Us</h2>
            <p className="text-gray-500 mt-2">We'd love to hear from you!</p>
          </CardHeader>
          <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-gray-700">
                <FaEnvelope className="w-5 h-5" />
                <span>contact@company.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <FaPhone className="w-5 h-5" />
                <span>+25493042033</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <FaMapMarkerAlt className="w-5 h-5" />
                <span>1234 Main St, Nairobi</span>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Write your message here"
                  rows={6}
                  required
                  className="w-full"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactUs;
