// import { useState } from "react";
// import { Star, ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/hooks/use-toast";

// const reviews = [
//   {
//     name: "Sarah Johnson",
//     role: "CEO, TechStart Inc.",
//     rating: 5,
//     text: "Rubayed transformed our digital presence! Our Facebook ads conversion rate increased by 300% in just 3 months. His data-driven approach and creative strategies are exceptional.",
//     image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
//   },
//   {
//     name: "Michael Chen",
//     role: "Marketing Director, GrowthHub",
//     rating: 5,
//     text: "Outstanding Google Ads management. Rubayed reduced our cost per acquisition by 45% while doubling our lead volume. True professional who delivers measurable results.",
//     image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
//   },
//   {
//     name: "Emily Rodriguez",
//     role: "Founder, StyleBoutique",
//     rating: 5,
//     text: "The email marketing campaigns Rubayed created for us generated $10k in additional revenue in the first quarter. His automation setup is brilliant and saves us hours every week.",
//     image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily"
//   },
//   {
//     name: "David Kim",
//     role: "VP Marketing, FitnessPro",
//     rating: 5,
//     text: "Rubayed's LinkedIn ads expertise helped us reach C-level executives we couldn't access before. Generated 150+ qualified B2B leads in 60 days. Highly recommend!",
//     image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
//   },
//   {
//     name: "Amanda Foster",
//     role: "Owner, LocalEats Restaurant Group",
//     rating: 5,
//     text: "The sales funnel Rubayed built for us is a game-changer. Our website conversions increased by 220%. He's not just a marketer, he's a growth partner.",
//     image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amanda"
//   }
// ];

// const Reviews = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [formData, setFormData] = useState({ name: "", review: "" });
//   const { toast } = useToast();

//   const nextReview = () => {
//     setCurrentIndex((prev) => (prev + 1) % reviews.length);
//   };

//   const prevReview = () => {
//     setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
//   };

//   const handleSubmitReview = (e: React.FormEvent) => {
//     e.preventDefault();
//     toast({
//       title: "Thank you for your review!",
//       description: "Your feedback has been submitted successfully.",
//     });
//     setFormData({ name: "", review: "" });
//   };

//   return (
//     <section id="reviews" className="py-24 bg-gradient-to-b from-background to-secondary/30">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl lg:text-5xl font-bold mb-4">
//             What My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Clients Say</span>
//           </h2>
//           <p className="text-xl text-muted-foreground">
//             Real feedback from real clients who achieved real results
//           </p>
//         </div>

//         {/* Reviews Carousel */}
//         <div className="max-w-4xl mx-auto mb-16">
//           <Card className="border-2 shadow-xl">
//             <CardContent className="p-8">
//               <div className="relative">
//                 <div className="flex items-start gap-6 mb-6">
//                   <img
//                     src={reviews[currentIndex].image}
//                     alt={reviews[currentIndex].name}
//                     className="w-20 h-20 rounded-full border-4 border-primary/20"
//                   />
//                   <div className="flex-1">
//                     <h3 className="text-xl font-semibold">{reviews[currentIndex].name}</h3>
//                     <p className="text-muted-foreground mb-2">{reviews[currentIndex].role}</p>
//                     <div className="flex gap-1">
//                       {[...Array(reviews[currentIndex].rating)].map((_, i) => (
//                         <Star key={i} className="w-5 h-5 fill-primary text-primary" />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//                 <p className="text-lg text-foreground leading-relaxed italic">
//                   "{reviews[currentIndex].text}"
//                 </p>
//               </div>

//               {/* Navigation */}
//               <div className="flex justify-center items-center gap-4 mt-8">
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   onClick={prevReview}
//                   className="rounded-full"
//                 >
//                   <ChevronLeft className="h-4 w-4" />
//                 </Button>
//                 <div className="flex gap-2">
//                   {reviews.map((_, idx) => (
//                     <button
//                       key={idx}
//                       onClick={() => setCurrentIndex(idx)}
//                       className={`w-2 h-2 rounded-full transition-all ${
//                         idx === currentIndex ? "bg-primary w-8" : "bg-muted"
//                       }`}
//                     />
//                   ))}
//                 </div>
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   onClick={nextReview}
//                   className="rounded-full"
//                 >
//                   <ChevronRight className="h-4 w-4" />
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Submit Review Form */}
//         <div className="max-w-2xl mx-auto">
//           <Card className="border-2">
//             <CardContent className="p-8">
//               <h3 className="text-2xl font-semibold mb-6 text-center">Share Your Experience</h3>
//               <form onSubmit={handleSubmitReview} className="space-y-4">
//                 <div>
//                   <Input
//                     placeholder="Your Name"
//                     value={formData.name}
//                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                     required
//                     className="text-base"
//                   />
//                 </div>
//                 <div>
//                   <Textarea
//                     placeholder="Your Review"
//                     value={formData.review}
//                     onChange={(e) => setFormData({ ...formData, review: e.target.value })}
//                     required
//                     rows={4}
//                     className="text-base resize-none"
//                   />
//                 </div>
//                 <Button type="submit" className="w-full" size="lg">
//                   Submit Review
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Reviews;
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const initialReviews = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    rating: 5,
    text: "Rubayed transformed our digital presence! Our Facebook ads conversion rate increased by 300% in just 3 months. His data-driven approach and creative strategies are exceptional.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, GrowthHub",
    rating: 5,
    text: "Outstanding Google Ads management. Rubayed reduced our cost per acquisition by 45% while doubling our lead volume. True professional who delivers measurable results.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, StyleBoutique",
    rating: 5,
    text: "The email marketing campaigns Rubayed created for us generated $10k in additional revenue in the first quarter. His automation setup is brilliant and saves us hours every week.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily"
  }
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviewsList, setReviewsList] = useState(initialReviews);
  const [formData, setFormData] = useState({ name: "", review: "", rating: 5 });
  const { toast } = useToast();

  // Carousel navigation
  const nextReview = () => setCurrentIndex((prev) => (prev + 1) % reviewsList.length);
  const prevReview = () => setCurrentIndex((prev) => (prev - 1 + reviewsList.length) % reviewsList.length);

  // Submit new review
  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    const newReview = {
      name: formData.name,
      role: "Client",
      rating: formData.rating,
      text: formData.review,
      image: `https://api.dicebear.com/7.x/avataaars/svg?seed=${formData.name}`
    };
    setReviewsList((prev) => [...prev, newReview]);
    toast({
      title: "Thank you for your review!",
      description: "Your feedback has been submitted successfully.",
    });
    setFormData({ name: "", review: "", rating: 5 });
    setCurrentIndex(reviewsList.length); // Show newly added review
  };

  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            What My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Real feedback from real clients who achieved real results
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-2 shadow-xl">
            <CardContent className="p-8">
              <div className="relative">
                <div className="flex items-start gap-6 mb-6">
                  <img
                    src={reviewsList[currentIndex].image}
                    alt={reviewsList[currentIndex].name}
                    className="w-20 h-20 rounded-full border-4 border-primary/20"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{reviewsList[currentIndex].name}</h3>
                    <p className="text-muted-foreground mb-2">{reviewsList[currentIndex].role}</p>
                    <div className="flex gap-1">
                      {[...Array(reviewsList[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-lg text-foreground leading-relaxed italic">
                  "{reviewsList[currentIndex].text}"
                </p>
              </div>

              {/* Navigation */}
              <div className="flex justify-center items-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevReview}
                  className="rounded-full"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="flex gap-2">
                  {reviewsList.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentIndex ? "bg-primary w-8" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextReview}
                  className="rounded-full"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Submit Review Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="border-2">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">Share Your Experience</h3>
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="text-base"
                />
                <Textarea
                  placeholder="Your Review"
                  value={formData.review}
                  onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                  required
                  rows={4}
                  className="text-base resize-none"
                />
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <span>Rating:</span>
                  {[1,2,3,4,5].map((star) => (
                    <Star
                      key={star}
                      className={`w-6 h-6 cursor-pointer ${
                        formData.rating >= star ? "fill-primary text-primary" : "text-muted-foreground"
                      }`}
                      onClick={() => setFormData({ ...formData, rating: star })}
                    />
                  ))}
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Submit Review
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
