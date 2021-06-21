import james from "./images/james.jpg";
import kirk from "./images/kirk.jpg";
import lars from "./images/lars.jpg";
import robert from "./images/robert.jpg";
import jason from "./images/jason.jpg";
import dave from "./images/dave.jpg";
import cliff from "./images/cliff.jpg";
import "./members.css";

const memberData = [
  {
    name: "james",
    pic: james,
    bio: "James Alan Hetfield (born August 3, 1963) is an American musician and songwriter, best known as the co-founder, lead vocalist, rhythm guitarist and primary songwriter for heavy metal band Metallica. He is mainly known for his intricate rhythm playing, but occasionally performs lead guitar duties and solos, both live and in the studio. Hetfield co-founded Metallica in October 1981 after answering an advertisement by drummer Lars Ulrich in the Los Angeles newspaper The Recycler. Metallica has won nine Grammy Awards and released ten studio albums, three live albums, four extended plays and 24 singles.",
    class: "floatLeft",
  },
  {
    name: "lars",
    pic: lars,
    bio: "Lars Ulrich (born 26 December 1963) is a Danish musician, songwriter, and record producer. He gained worldwide fame as the drummer and co-founder of American heavy metal band Metallica. The son and grandson respectively of tennis players Torben and Einer Ulrich, he played tennis in his youth and moved to Los Angeles at age 16 to train professionally. However, rather than playing tennis, Ulrich began playing drums. After publishing an advertisement in The Recycler, Ulrich met James Hetfield and formed Metallica. Along with Hetfield, Ulrich has songwriting credits on almost all of the band's songs.",
    class: "floatRight",
  },
  {
    name: "kirk",
    pic: kirk,
    bio: "Kirk Lee Hammett (born November 18, 1962)is an American musician who has been the lead guitarist and a contributing songwriter for heavy metal band Metallica since 1983. Before joining Metallica he formed and named the band Exodus. In 2003, Hammett was ranked 11th on Rolling Stone's list of The 100 Greatest Guitarists of All Time. In 2009, Hammett was ranked number 15 in Joel McIver's book The 100 Greatest Metal Guitarists",
    class: "floatLeft",
  },
  {
    name: "robert",
    pic: robert,
    bio: "Robert Trujillo (born October 23, 1964) is an American musician and songwriter who is the bassist for American heavy metal band Metallica. He first rose to prominence as the bassist of crossover thrash band Suicidal Tendencies from 1989 to 1995, while also collaborating with Suicidal Tendencies frontman Mike Muir for funk metal supergroup Infectious Grooves. After leaving Suicidal Tendencies, he performed with Ozzy Osbourne, Jerry Cantrell, and heavy metal band Black Label Society. Trujillo joined Metallica in 2003 and is the band's longest-serving bassist after passing Jason Newsted in 2018, though Metallica has released more albums featuring Newsted. He was inducted to the Rock and Roll Hall of Fame as a member of Metallica in 2009.",
    class: "floatRight",
  },
  {
    name: "jason",
    pic: jason,
    bio: "Jason Curtis Newsted (born March 4, 1963) is an American musician who was the bassist of American heavy metal band Metallica from 1986 to 2001. Beginning his career with thrash metal band Flotsam and Jetsam from 1981 to 1986, he successfully auditioned with Metallica to succeed the deceased Cliff Burton. Newsted performed on the albums ...And Justice for All (1988), Metallica (1991), Load (1996), and Reload (1997), the most album appearances among Metallica's bassists. After leaving Metallica, Newsted was a member of metal bands Echobrain and Voivod and toured with Ozzy Osbourne, using the pseudonym Jasonic for Voivod. He also fronted heavy metal band Newsted from 2012 to 2014. Newsted was inducted to the Rock and Roll Hall of Fame as a member of Metallica in 2009. A rumor began circulating in 2021 that Newsted would replace David Ellefson, following his firing from Megadeth, which Newsted would shoot down",
    class: "floatLeft",
  },
  {
    name: "dave",
    pic: dave,
    bio: "David Scott Mustaine (born September 13, 1961) is an American musician best known as the co-founder, vocalist, guitarist, and primary songwriter of thrash metal band Megadeth. Prior to forming Megadeth, Mustaine was the original lead guitarist of heavy/thrash metal band Metallica, co-writing at least six released Metallica songs but not appearing on any of their albums.",
    class: "floatRight",
  },
  {
    name: "cliff",
    pic: cliff,
    bio: "Clifford Lee Burton (February 10, 1962 – September 27, 1986) was an American musician and songwriter who was the bassist for American heavy metal band Metallica from 1982 until his death in 1986. He performed on Kill 'Em All (1983), Ride the Lightning (1984), and Master of Puppets (1986), the band's first three studio albums. Burton also received posthumous writing credit on ...And Justice for All (1988) for the song \"To Live Is to Die\". While touring in 1986 to support Master of Puppets, Burton died following a bus crash in Sweden. Recognized as an influential musician during his lifetime, Burton remains a prominent musical influence and placed ninth in a 2011 reader poll from Rolling Stone recognizing the greatest bassists of all time. He was posthumously inducted to the Rock and Roll Hall of Fame as a member of Metallica in 2009.",
    class: "floatLeft",
  },
];

// function Members({ name }) {
//   return (
//     <div className={`memberDiv ${memberData[name]["class"]}`}>
//       <div className='buffer' id={name}></div>
//       <img
//         className={" member"}
//         src={`${memberData[name]["pic"]}`}
//         alt=''
//       ></img>
//       <p className='lead'>{`${memberData[name]["bio"]}`}</p>
//     </div>
//   );
// }

function Members() {
  return (
    <div>
      {memberData.map((member, index) => (
        <div className={`memberDiv ${member.class}`}>
          <div className='buffer' id={member.name}></div>
          <img className='member' src={`${member.pic}`} alt=''></img>
          <p className='lead'>{`${member.bio}`}</p>
        </div>
      ))}
      ;
    </div>
  );
}

export default Members;
