import Button from "@/components/primitive/Button";
import Typography from "@/components/primitive/Typography";

export default function StartWith() {
  return (
    <section className="relative">
      <img
        src="/images/mask.png"
        alt="mark"
        className="absolute h-full w-full object-cover"
      />
      <div className="mx-auto mb-10 flex max-w-screen-2xl justify-between py-24">
        <div className="max-w-3xl">
          <div className="font-heavitas">
            <Typography variant="h3" intent="secondary">
              START WITH
            </Typography>
            <Typography
              className="max-w-md"
              variant="h2"
              size="5xl"
              intent="secondary"
            >
              HA GIANG CHEERS TOUR
            </Typography>
          </div>
          <ul>
            <li>SUPPORT LOCAL - SUSTAINABLE TRAVEL</li>
          </ul>
          <div>
            <p>
              The Ha giang Loop Cheers Tour with easy rider organized by Vietnam
              Cheers Hostel is a must in Vietnam for any traveller. It is
              considered a highlight of South East Asia.
            </p>
            <p>
              Explore Ma Pi Leng, one of The Big Four Passes in Vietnam, through
              thousands of conical limestone peaks as well as deep and
              meandering valleys. Party dinner with families, waterfall and
              local life at authentic Cheers Du Gia Homestay will be the unique
              experience as well. This is designed for adventure-seekers — those
              who want to experience the biggest challenge Vietnam has to offer
              in a safe environment with our experienced easy riders.
            </p>
          </div>
          <div>
            <Button intent={"secondary"}>Book now</Button>
          </div>
        </div>
        <div>
          <img src="/images/mapvn.png" alt="map" />
        </div>
      </div>
    </section>
  );
}
