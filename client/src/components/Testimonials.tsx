import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import reviewImg1 from "../../assets/review1.png";
import reviewImg2 from "../../assets/review2.png";
import reviewImg3 from "../../assets/review3.png";
import reviewImg4 from "../../assets/review4.png";
import reviewImg5 from "../../assets/review5.png";
import reviewImg6 from "../../assets/review6.png";
import reviewImg7 from "../../assets/review7.png";
import reviewImg8 from "../../assets/review8.png";

const reviewData = [
  {
    imgUrl: reviewImg1,
    name: "Sophia Turner",
    reviewText:
      "TechTalk is the ultimate platform for tech enthusiasts! The curated resources and expert-led sessions have been incredibly valuable in advancing my career. Highly recommended!",
    rating: 5,
  },
  {
    imgUrl: reviewImg2,
    name: "James Carter",
    reviewText:
      "I’ve learned so much through the TechTalk community. The interactive webinars and forums are excellent, and the networking opportunities are unmatched. A fantastic platform for growth!",
    rating: 4.5,
  },
  {
    imgUrl: reviewImg3,
    name: "Emily Brown",
    reviewText:
      "The resources on TechTalk are phenomenal. From beginner tutorials to advanced guides, it’s all here. The team is responsive, and the community is very supportive. I love it!",
    rating: 5,
  },
  {
    imgUrl: reviewImg4,
    name: "Michael Wilson",
    reviewText:
      "TechTalk has been a game-changer for me. The live sessions with industry experts are top-notch, and I’ve gained so much insight into the latest tech trends. Highly recommended for anyone in tech!",
    rating: 5,
  },
  {
    imgUrl: reviewImg5,
    name: "Olivia Davis",
    reviewText:
      "Joining TechTalk was the best decision I made this year. The platform is intuitive, and the variety of topics covered is impressive. It’s a one-stop shop for all things tech!",
    rating: 4.5,
  },
  {
    imgUrl: reviewImg6,
    name: "Liam Martinez",
    reviewText:
      "TechTalk has everything a tech enthusiast needs – great content, a supportive community, and plenty of opportunities to grow and connect. It’s my go-to platform!",
    rating: 5,
  },
  {
    imgUrl: reviewImg7,
    name: "Sophia Green",
    reviewText:
      "The discussions on TechTalk have been so enriching. It’s not just a learning platform; it’s a space to share ideas and collaborate with like-minded individuals. I’m so glad I joined!",
    rating: 5,
  },
  {
    imgUrl: reviewImg8,
    name: "Chris Johnson",
    reviewText:
      "TechTalk combines quality, accessibility, and community perfectly. I’ve grown my skills and met amazing people along the way. Can’t recommend it enough!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section>
      <div className="container mx-auto py-10 lg:py-12 px-5">
        <h2 className="text-3xl text-primary-text text-center font-semibold mb-4">
          Trusted Reviews
        </h2>
        <div className="relative">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination]}
          >
            {reviewData.map((review, index) => (
              <SwiperSlide key={index}>
                <ReviewItem
                  imgUrl={review.imgUrl}
                  name={review.name}
                  reviewText={review.reviewText}
                  rating={review.rating}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
interface ReviewItemProps {
  imgUrl: StaticImageData;
  name: string;
  reviewText: string;
  rating: number;
}

const ReviewItem: React.FC<ReviewItemProps> = ({
  imgUrl,
  name,
  reviewText,
  rating,
}) => {
  return (
    <blockquote className="bg-secondary-background p-4 rounded-lg">
      <div className="flex items-center gap-4">
        <Image
          alt={name}
          src={imgUrl}
          className="size-14 rounded-full object-cover"
        />

        <div>
          <div className="">
            <Rating value={rating} />
          </div>

          <p className="mt-0.5 text-lg font-medium text-primary-text">{name}</p>
        </div>
      </div>

      <p className="mt-4 text-secondary-text">{reviewText}</p>
    </blockquote>
  );
};

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";

type RatingProps = {
  value: number;
  className?: string;
  color?: string;
};
const Rating = ({ value, color = "#ff5722", className }: RatingProps) => {
  const fullStars = Math.floor(value);
  const hasHalfStar = value - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} color={color} />
      ))}
      {hasHalfStar && <FaStarHalfAlt color={color} />}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={index} color={color} />
      ))}
    </div>
  );
};
