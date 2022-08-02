export default function SponsorCard({ image }) {
    return (
      <div className=" p-2 bg-bg-card-sponsor bg-opacity-70 rounded">
        <img
          src={image}
          className="h-28 lg:h-20 m-auto object-scale-down"
          alt=""
        ></img>
      </div>
    );
  }