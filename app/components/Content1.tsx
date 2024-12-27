import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

const Contentone = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 bg-white py-12 px-6 lg:px-20">
  
      <div className="flex-1">
        <Image
        src="/images/pic2.jpg"
        alt="Team Discussion"
        className="rounded-lg shadow-md w-full object-cover"
        width={800}
        height={500}
      />
      </div>

       <div className="flex-1  pt-1">
        <Card className="shadow-lg">
          <CardHeader>
            <h2 className="text-2xl text-center font-bold text-gray-800">Who We Are</h2>
          </CardHeader>
          <CardContent>
            <p className="text-base text-gray-700 mb-4">
              At FIC, we are dedicated to helping you achieve fluency in German
              and French, as well as success in the IELTS exam.
            </p>
            <p className="text-base text-gray-700 ">
              Whether you are pursuing professional opportunities, planning to
              study abroad, or simply passionate about language learning,
              you have come to the right place.
            </p>
          </CardContent>
          <CardFooter className="pt-4">
            <a
              href="/register"
              className=" items-center bg-yellow-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-200"
            >
              REGISTER NOW →
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Contentone;
