import { testimonials } from "../constants/index.jsx";
import TestimonialItem from "../Components/TestimonialItem.jsx";

const Testimonials = () => {
  const halfLength = Math.floor(testimonials.length / 2);

  return (
    <section className="relative z-2 py-24 md:py-28 lg:py-40">
      <div className="container block lg:flex">
        {/* Testimonials Heading */}
        <div className="testimonials_head-res relative z-2 mr-20 flex-300">
          <p className="caption mb-5 max-md:mb-2.5">Wall of love</p>
          <h3 className="h3 max-md:h5 text-p4">Words from our fans</h3>
        </div>

        {/* Testimonials List */}
        <div className="testimonials_inner-after testimonials_inner-before relative -my-12 -mr-3 flex items-start max-lg:static max-md:block">
          {/* First Half of Testimonials */}
          <div className="testimonials_group-after flex-50">
            {testimonials.slice(0, halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                item={testimonial}
                containerClassName="last:after:hidden last:after:max-md:block"
              />
            ))}
          </div>

          {/* Second Half of Testimonials */}
          <div className="testimonials_group-after flex-50">
            {testimonials.slice(halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                item={testimonial}
                containerClassName="last:after:hidden last:after:right-auto after:left-0 after:max-md:-left-4 md:px-12"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
