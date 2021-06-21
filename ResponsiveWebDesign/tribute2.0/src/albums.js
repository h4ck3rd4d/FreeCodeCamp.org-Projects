import killemall from "./images/killemall.jpg";
import ridethelightning from "./images/ridethelightning.jpg";
import master from "./images/master.jpg";
import justice from "./images/justice.jpg";
import black from "./images/black.jpg";
import load from "./images/load.jpg";
import reload from "./images/reload.jpg";
import anger from "./images/anger.jpg";
import magnetic from "./images/magnetic.jpg";
import hardwired from "./images/hardwired.jpg";
import "./albums.css";

const albumInfo = [
  {
    title: "Kill 'em All",
    cover: killemall,
    released: "July 25, 1983",
    singles: ["Whiplash", "Jump in the Fire"],
  },
  {
    title: "Ride the Lightning",
    cover: ridethelightning,
    released: "July 27 1984",
    singles: ["Fade to Black", "Creeping Death", "For Whom the Bell Tolls"],
  },
  {
    title: "Master of Puppets",
    cover: master,
    released: "March 3, 1986",
    singles: ["Master of Puppets"],
  },
  {
    title: "And Justice for All",
    cover: justice,
    released: "September 7, 1988",
    singles: ["Harvester of Sorrow", "Eye of the Beholder", "One"],
  },
  {
    title: "Metallica (the Black Album)",
    cover: black,
    released: "August 12, 1991",
    singles: [
      "Enter Sandman",
      "The Unforgiven",
      "Nothing Else Matters",
      "Wherever I may Roam",
      "Sad but True",
    ],
  },
  {
    title: "Load",
    cover: load,
    released: "June 4, 1996",
    singles: [
      "Until it Sleeps",
      "Hero of the Day",
      "Mama Said",
      "King Nothing",
    ],
  },
  {
    title: "Reload",
    cover: reload,
    released: "November 18, 1997",
    singles: [
      "The Memory Remains",
      "The Unforgiven II",
      "Fuel",
      "Better than you",
    ],
  },
  {
    title: "St. Anger",
    cover: anger,
    released: "June 5, 2003",
    singles: [
      "St. Anger",
      "Frantic",
      "The Unnamed Feeling",
      "Some kind of Monster",
    ],
  },
  {
    title: "Death Magnetic",
    cover: magnetic,
    released: "September 12, 2008",
    singles: [
      "The Day That Never Comes",
      "All Nightmare Long",
      "Broken, Beat & Scarred",
    ],
  },
  {
    title: "Hardwired... to Self Destruct",
    cover: hardwired,
    released: "November 18, 2016",
    singles: [
      "Hardwired",
      "Moth into Flame",
      "Atlas Rise",
      "Now That We're Dead",
      "Spit Out the Bone",
    ],
  },
];
function Albums() {
  return (
    <div>
      <h2 className='album-heading'>Albums</h2>
      <div className='albums-div'>
        {albumInfo.map((album, i) => (
          <div>
            <div className='buffer' id={i}></div>

            <div className='album-individual'>
              <img className='covers' src={`${album.cover}`} alt=''></img>
              <h3 className='album-title'>"{`${album.title}`}"</h3>
              <p>{`Released on ${album.released}`}</p>
              <h3>Singles</h3>
              {album.singles.map((single) => (
                <p>{`${single}`}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Albums;
