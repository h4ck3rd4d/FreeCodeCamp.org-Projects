import "./history.css";
import logo from "./images/Metallica-Logo.png";

function History() {
  return (
    <div className='container mt-100 p-5 lead' id='hist'>
      <img className='img-fluid' src={logo} alt='logo'></img>
      <p>
        <b>Metallica</b> formed in 1981 by drummer Lars Ulrich and guitarist and
        vocalist James Hetfield and has become one of the most influential and
        commercially successful rock bands in history, having sold 110 million
        albums worldwide while playing to millions of fans on literally all
        seven continents. They have scored several multi-platinum albums,
        including 1991’s Metallica (commonly referred to as The Black Album),
        with sales of nearly 17 million copies in the United States alone,
        making it the best-selling album in the history of Soundscan. Metallica
        has also garnered numerous awards and accolades, including nine Grammy
        Awards, two American Music Awards, and multiple MTV Video Music Awards,
        and were inducted into the Rock and Roll Hall of Fame and Museum in
        2009. In December 2013, Metallica made history when they performed a
        rare concert in Antarctica, becoming the first act to ever play all
        seven continents all within a year, and earning themselves a spot in the
        Guinness Book of World Records.
      </p>
    </div>
  );
}

export default History;
