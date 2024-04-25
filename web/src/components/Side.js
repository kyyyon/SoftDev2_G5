import React from "react";

function SidePanel({ sendMessage }) {
  const handleLinkClick = (question, answer, time) => {
    sendMessage(question, answer, time);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "8vh",
        left: 0,
        height: "100%",
        width: "250px",
        backgroundColor: "#41333A",
        color: "#fff",
        padding: "20px",
        boxSizing: "border-box",
        textAlign: "center",
      }}
    >
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2>
          Let's Travel!!{" "}
          <button
            style={{
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              borderRadius: "10%",
              padding: "10px",
              fontSize: "15px",
              cursor: "pointer",
              marginLeft: "10px",
            }}
          >
            <a href="/" style={{ textDecoration: "none", color: "#e2e2e2" }}>
              Add New +
            </a>
          </button>
        </h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "10px" }}>
            <button
              style={{
                whiteSpace: "pre-wrap",
                backgroundColor: "transparent",
                color: "#fff",
                border: "2px solid #000",
                borderRadius: "5px",
                padding: "8px 16px",
                cursor: "pointer",
              }}
              onClick={() =>
                handleLinkClick(
                  "Holy Rosary Parish Church",
                  <div>
                    Holy Parish Church, formerly known as the “Santo Rosario
                    Church,” is situated at the heart of Angeles City in
                    Pampanga. The 141-year-old parish church is also known among
                    locals as “Pisambang Maragul” or big city. It has been
                    declared by the National Museum as one of the most important
                    cultural properties in the country and has been recognized
                    as a National Historic Site by the National Commission for
                    Cultural and the Arts.
                    <br />
                    <br />
                    The church was constructed during the Spanish colonial era
                    from 1877 to 1896 and its foundation was first established
                    on October 18, 1877 by the founding families of Angeles City
                    led by Don Mariano Henson. Filipinos mainly built the church
                    via the "polo y servicio” labor system of the Spanish
                    colonial government that forces workers to do labor for
                    free. The first half of the church was finished by April 14,
                    1896 while the second half of the Catholic site including
                    its distinctive dome was completed on September 17, 1891.
                    <br />
                    <br />
                    After its belfry was destroyed during World War II, the
                    Philippine government subsequently restored the structure
                    with the help of American troops and finished it in the
                    early 1944s. Aside from celebrating mass here and admiring
                    its architecture, visitors can also walk on the restored
                    cobblestones roads that are a witness to the long-standing
                    history of the church.
                    <br />
                    <br />
                    As the Holy Parish Church serves as Angeles City’s main
                    religious site, local faithful often visit it for religious
                    activities such as observation of the Lenten Season. The
                    church is dedicated to the Most Holy Virgin of the Rosary,
                    hence, it is also named Our Lady of the Most Holy Rosary
                    Parish Church. It was dedicated on February 12, 1896.
                    <br />
                    <br />
                    <i>Best time to visit</i>
                    <br /> It is best to visit the parish in December when
                    Christmas festivities are in full swing as you will get to
                    see the church adorned in beautiful decorations and have the
                    chance to celebrate advent and Christmas with the parish.
                    The church also holds daily mass throughout the year and is
                    open to the public every day. <br />
                    <br />
                    <i>Address</i>
                    <br /> Santo Rosario St, Angeles, 2009 Pampanga <br />
                    <br />
                    Link: https://www.facebook.com/hrpacofficial/
                  </div>
                )
              }
            >
              Holy Rosary Parish Church
            </button>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <button
              style={{
                backgroundColor: "transparent",
                color: "#fff",
                border: "2px solid #000",
                borderRadius: "5px",
                padding: "8px 16px",
                cursor: "pointer",
              }}
              onClick={() =>
                handleLinkClick(
                  "Museo ning Angeles",
                  <div>
                    Angeles City in the province of Pampanga has a very rich
                    culture and tradition. All of the symbols of the Kapampangan
                    lifestyle are housed under one roof, Museo Ning Angeles or
                    Angeles City Museum. The museum was built in 1999 in the
                    former town hall that was originally built in 1922. The
                    Kuliat Foundation Inc. manages the city museum, and their
                    "absolute purpose is to preserve the history, culture, and
                    tradition of Angeles City".
                    <br />
                    <br />
                    The main exhibit of the museum showcases the evolution of
                    the city and its people. It is called Balikdan (meaning "to
                    look back"). One will see famous and notable personalities
                    (Angeles City Hall of Fame), works of local artists, rare
                    photographs of Angeles City during the Philippine-American
                    War, and memorabilia of Mount Pinatubo's 1991 eruption.
                    <br />
                    <br />
                    Being the "Culinary Capital of the Philippines", the city
                    museum has a Culinarium inside. It is an exhibit that
                    features the Kapampangan's expertise and love for food.
                    Another permanent exhibit is the dioramas. These dioramas
                    showcase the classic clothing of the Filipinos (Grand Dame
                    of Philippine Fashion) and various lifestyle scenes in a
                    Kapampangan's life.
                    <br />
                    <br />
                    <i>Best time to visit</i>
                    <br /> The museum is open Monday to Friday from 8AM to 5PM.
                    <br />
                    <br />
                    <i>Entrance Fees</i>
                    <br /> Kuliat Foundation Inc., is a non-profit organization,
                    managing Museo Ning Angeles. To be able to keep the museum
                    alive and running, the group sources its income from
                    entrance fees, monthly donor contributions and grants. Added
                    profit is also obtained from the museum's souvenir shop and
                    cafe.
                    <br />
                    <br />
                    <i>Opening hours</i>
                    <br /> Monday: 8:00 AM – 5:00 PM; Tuesday: 8:00 AM – 5:00
                    PM; Wednesday: 8:00 AM – 5:00 PM; Thursday: 8:00 AM – 5:00
                    PM; Friday: 8:00 AM – 5:00 PM; Saturday: Closed; Sunday:
                    Closed
                    <br />
                    <br />
                    <i>Address</i>
                    <br /> Heritage District, Santo Rosario St, Angeles, 2009
                    Pampanga
                  </div>
                )
              }
            >
              Museo ning Angeles
            </button>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <button
              style={{
                backgroundColor: "transparent",
                color: "#fff",
                border: "2px solid #000",
                borderRadius: "5px",
                padding: "8px 16px",
                cursor: "pointer",
              }}
              onClick={() =>
                handleLinkClick(
                  "Air Force City Park",
                  <div>
                    Air Force City Park is a recreational complex that features
                    real helicopters, fighter jets, and aviation equipment used
                    by the Armed Forces of the Philippines and the United
                    States. It is located within the Clark Freeport Zone in
                    Pampanga, 96 kilometers north of Manila.
                    <br />
                    <br />
                    The park is the perfect place to marvel at aircraft that
                    served the country as a visit here will allow you to see a
                    UH-1H Iroquois or a HUEY, a Vought F8 Crusader, an F5a Jet
                    (which is also popularly called the Freedom Fighter), a T-28
                    Trojan, and a T-33 or a Thunder Bird, which was the
                    country's first aircraft, ushering the Philippine Air Force
                    into the jet age.
                    <br />
                    <br />
                    Aside from a history tour, the park also offers shaded areas
                    for visitors to have picnics or naps. Its wide space with a
                    play area is also perfect for kids to run around and have
                    fun.
                    <br />
                    <br />
                    <i>Best time to visit</i>
                    <br /> Since the Air Force City Park is an outdoor venue,
                    it's best to visit it during the dry but cool months, which
                    are usually from November to February.
                    <br />
                    <br />
                    <i>Tickets and entry</i>
                    <br /> Entrance to the Air Force City Park is free, but you
                    must secure a health clearance from the Air Force City
                    Hospital. Note that you need to pay a minimal fee should you
                    need to use the toilets here. cafe.
                    <br />
                    <br />
                    <i>Opening hours</i>
                    <br />
                    5 AM–10 PM
                    <br />
                    <br />
                    <i>Address</i>
                    <br /> Andres Bonifacio Avenue, Clark Freeport, Mabalacat,
                    2010 Pampanga
                  </div>
                )
              }
            >
              Air Force City Park
            </button>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <button
              style={{
                whiteSpace: "pre-wrap",
                backgroundColor: "transparent",
                color: "#fff",
                border: "2px solid #000",
                borderRadius: "5px",
                padding: "8px 16px",
                cursor: "pointer",
              }}
              onClick={() =>
                handleLinkClick(
                  "Deca Clark Wakeboard",
                  <div>
                    Deca Clark Wakeboard is a cable wakeboard park situated in
                    Margot, Angeles City, which is behind the perimeter wall of
                    Clark Freeport zone in Pampanga. Opened in December 2012,
                    this action-packed leisure spot is especially designed for
                    both trained and aspiring wakeboard riders. The park
                    features a full-size 5-point Rixen main cable that will pull
                    you across the lake at a constant speed. The main lake has
                    five corners with obstacles like an A-frame, curved kicker,
                    and wedge, in between. Meanwhile, first-time or less
                    experienced wakeboards can learn and practice the basics in
                    the separate Easy Start Beginners' Area.
                    <br />
                    <br />
                    The staff also provides a helmet, life vest, a beginner's
                    board, and the service of an instructor when you book a
                    beginner ride, which usually lasts for two hours. On the
                    other hand, professional wakeboarders can book longer
                    sessions and rent pro boards. All wakeboarders are required
                    to wear their helmet and vest at all times while riding.
                    <br />
                    <br />
                    <i>Best time to visit</i>
                    <br /> It is best to book a session here in the dry months
                    of December to May as there are fewer chances of tropical
                    rainstorms during this time. However, visitors may still go
                    wakeboarding in light to moderate rain. Lifestyle and
                    aspiring riders can also spend their wakeboarding holidays
                    or trainings in this park as it is open every day from 8 AM
                    to 6 PM. <br />
                    <br />
                    <i>Opening hours</i>
                    <br />
                    5 AM–10 PM <br /> <br />
                    <i>Address</i>
                    <br /> Jose P Laurel Ave, Angeles, Pampanga <br />
                    <br />
                    Links <br />
                    https://decawakeparkclark.yodelle.us/140/services <br />
                    https://www.facebook.com/decawake.clark/
                  </div>
                )
              }
            >
              Deca Clark Wakeboard
            </button>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <button
              style={{
                whiteSpace: "pre-wrap",
                backgroundColor: "transparent",
                color: "#fff",
                border: "2px solid #000",
                borderRadius: "5px",
                padding: "8px 16px",
                cursor: "pointer",
              }}
              onClick={() =>
                handleLinkClick(
                  "Center for Kapampangan Studies",
                  <div>
                    University museum of Kapampangan culture & history, with
                    diverse artifacts, dioramas & photos. Exhibits on
                    Kapampangan history, culture and archaeology with
                    interactive digital kiosks. John A. Larkin Library and
                    Ambeth Ocampo Collection. Little Theatre for screening of
                    Kapampangan films and videos, and for lectures and
                    performances. <br />
                    <br />The Juan D. Nepomuceno Center for Kapampangan
                    Studies is a major community-based, non-profit organization
                    established in 1965 to foster the understanding and
                    appreciation of Kapampangan art, history, and culture in the
                    Philippines.
                    <br />
                    <br />
                    <i>Opening hours</i>
                    <br />
                    Thursday 8 AM–5 PM Friday 8 AM–5 PM Saturday Closed Sunday
                    Closed Monday 8 AM–5 PM Tuesday 8 AM–5 PM Wednesday
                    8 AM–5 PM
                    <br /> <br />
                    <i>Address</i>
                    <br /> Holy Angel University, Angeles City, Philippines,
                    2009 <br />
                    <br />
                    Links <br />
                    https://www.kapampangancenter.org/# <br />
                    https://www.facebook.com/haucks/
                  </div>
                )
              }
            >
              Center for Kapampangan Studies
            </button>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <button
              style={{
                whiteSpace: "pre-wrap",
                backgroundColor: "transparent",
                color: "#fff",
                border: "2px solid #000",
                borderRadius: "5px",
                padding: "8px 16px",
                cursor: "pointer",
              }}
              onClick={() =>
                handleLinkClick(
                  "Parade Ground",
                  <div>
                    Clark Parade Ground's previous name is Fort Stotensburg,
                    named after Colonel John M. Stotsenburg. He is a captain of
                    the 6th US Calvary who died in action while leading his
                    regiment in a battle with Filipino revolutionaries in April
                    1899. His entrance pillars still stand here, too.
                    <br />
                    <br />
                    Today, Parade Ground serves as a park for families to enjoy.
                    A newly rubberized jogging path that's 2.2 kilometers long
                    was also built here. With this, fun runs and obstacle games
                    are usually organized here. The park has updated amenities
                    also like improved public restrooms and free internet wifi
                    connectivity. Parade Ground is located inside the massive
                    Clark Air Base. It used to be a US military facility during
                    World War II but is now under the management of the
                    Philippine Air Force. Parade Ground is one of the most
                    visited places in Clark Air Base, together with Salakot
                    (native hat) Arch and four important markers near the iconic
                    flagpole. The Salakot Arch is a symbolic landmark of
                    Philippines-United States friendship for years. It was
                    originally built to symbolize the signing of the Republic of
                    the Philippines and the United States Military Bases
                    Agreement that happened during the Marcos administration.
                    The Death Place of Roxas Marker was built to honor former
                    President Manuel A. Roxas. He died of a heart attack after
                    delivering a speech in Kelly Theater inside Clark on April
                    15, 1948. Still situated on the Parade Ground is the 26th
                    Cavalry Memorial which commemorates the heroic deeds of the
                    26th Cavalry Scouts and the US Army. Another marker is the
                    US Army Air Corps and Philippine Air Force Monument which
                    symbolizes the partnerships between the two military camps.
                    The last memorial marker is probably the most important of
                    all - the one that commemorates the turnover of Clark Air
                    Base from the US government to the Philippine government.
                    <br />
                    <br />
                    <i>Best time to visit</i>
                    <br /> You can visit this tourist site in Clark, Pampanga
                    anytime of the year. <br />
                    <br />
                    <i>Address</i>
                    <br /> Clark Parade Grounds, Clark Freeport, Clark Special
                    Economic Zone, Pampanga, Philippines.
                  </div>
                )
              }
            >
              Parade Ground
            </button>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <button
              style={{
                whiteSpace: "pre-wrap",
                backgroundColor: "transparent",
                color: "#fff",
                border: "2px solid #000",
                borderRadius: "5px",
                padding: "8px 16px",
                cursor: "pointer",
              }}
              onClick={() =>
                handleLinkClick(
                  "Museum of Philippine Social History",
                  <div>
                    The Museum of Philippine Social History or “Museo ng
                    Kasaysayan ng Panlipunan ng Pilipinas” is situated inside
                    the Pamintuan Mansion in Angeles City, Pampanga. Housing
                    several exhibits about Filipino's social history, it gives
                    visitors a glimpse of life back in the day and how time has
                    changed over the years. The Pamintuan Mansion was
                    constructed in 1890 by Mariano Pamintuan and Valentina
                    Torress, one of Pampanga's prominent families at the time,
                    as a wedding gift for their son Florentino. The mansion also
                    served as the seat of the Philippine republic in May 1899
                    and was the site for the celebration of the first
                    anniversary of the declaration of Philippine Independence.
                    <br />
                    <br />
                    In 1964, the Pamintuan kin sold the mansion to Pedro
                    Tablante, who decided to lease the property to the
                    government. After the lease in 1981, the Bangko Sentral ng
                    Pilipinas used the mansion as its regional office from 1993
                    to 2009. By 2010, the National Historical Commission of the
                    Philippines acquired the mansion.
                    <br />
                    <br />
                    At present, Museum of Philippine Social History houses
                    several galleries showcasing the Filipino culture such as
                    local fashion, Philippine culinary, architecture, Filipino
                    games, music, and Philippine mythological creatures, among
                    others. Galleries also present the history of the Pamintuan
                    mansion to present.
                    <br />
                    <br />
                    Tourists can also enjoy audio-visual room where you can
                    watch an educational video that introduces the museum,
                    gallery, public programs. The same room serves as lecture
                    rooms. The museum also provides visitors electronic tablets
                    that inform tourists about the Philippine history, Filipino
                    houses, furniture and music in its e-learning room.
                    <br />
                    <br />
                    Aside from the exhibits inside the museum, the structure
                    itself is also a sight to see. It was mainly built by steel
                    and expensive materials that are personalized with intricate
                    details to depict Pamintuan family’s wealth. It also houses
                    antique pieces. The two-story museum was deemed as the
                    highest structure in Angeles City and you can even view Mt.
                    Arayat as well as the rest of the city from its rooftop
                    area.
                    <br />
                    <br />
                    <i>Best time to visit</i>
                    <br /> The museum is open all-year-round, making it a great
                    destination for travelers during any season. You can visit
                    from Tuesday to Sunday starting at 8 AM. On Tuesdays,
                    Wednesdays, and Saturdays, it closes at 5 PM and closes an
                    hour earlier every Friday and Sunday. <br />
                    <br />
                    <i>Opening hours</i>
                    <br />
                    Monday: Closed; Tuesday: 8:00 AM – 4:00 PM; Wednesday: 8:00
                    AM – 4:00 PM; Thursday: 8:00 AM – 4:00 PM; Friday: 8:00 AM –
                    4:00 PM; Saturday: 8:00 AM – 4:00 PM; Sunday: 8:00 AM – 4:00
                    PM
                    <br /> <br />
                    <i>Address</i>
                    <br /> Santo Entiero St, Angeles, Pampanga <br />
                    <br />
                    Links <br />
                    https://museumofphilippinesocialhistorysite.wordpress.com/{" "}
                    <br />
                    https://www.facebook.com/nhcp.museumofphilippinesocialhistory/
                  </div>
                )
              }
            >
              Museum of Philippine Social History
            </button>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <button
              style={{
                backgroundColor: "transparent",
                color: "#fff",
                border: "2px solid #000",
                borderRadius: "5px",
                padding: "8px 16px",
                cursor: "pointer",
              }}
              onClick={() =>
                handleLinkClick(
                  "Museo ning Angeles",
                  <div>
                    Apung Mamacalulu, which translates to “Merciful Lord,” is a
                    statue that depicts the burial of Jesus Christ enshrined at
                    the Archdiocesan Shrine of Christ our Lord of the Holy
                    Sepulchre in the town of Lourdes Sur in Mexico, Pampanga.
                    Because of the statue’s depiction, it is also referred to as
                    Santo Entierro or “Holy Burial.”
                    <br />
                    <br />
                    The devotees of Apung Mamacalulu have long revered the
                    statue as a symbol of hope, especially for people who long
                    for a connection to the Divine during very difficult times.
                    He is believed to bestow mercy even after death, and the
                    devotion celebrates the Lord’s final act of sacrifice for
                    the love of humankind.
                    <br />
                    <br />
                    While special Holy Mass is celebrated in the shrine every
                    Friday, the congregation and devotees especially gather on
                    Good Friday to mourn the death of Christ. The Philippines,
                    being a predominantly Catholic nation, holds this day holy.
                    <br />
                    <br />
                    The mourning is done after the Veneration of the Cross. A
                    procession is then held, which culminates back to the church
                    where the statue is brought to the altar where veiled women
                    cry in mourning and gather in prayer, usually spoken in the
                    local Kapampangan language.
                    <br />
                    <br />
                    <i>Best time to visit</i>
                    <br /> The church is open all year round and holds regular
                    masses on Fridays.
                    <br />
                    <br />
                    <i>Address</i>
                    <br /> Celestino Dayrit Street, Angeles, Pampanga Pampanga
                  </div>
                )
              }
            >
              Apung Mamacalulu Shrine
            </button>
          </li>
          <li>
            <button
              style={{
                backgroundColor: "transparent",
                color: "#fff",
                border: "2px solid #000",
                borderRadius: "5px",
                padding: "8px 16px",
                cursor: "pointer",
              }}
              onClick={() =>
                handleLinkClick(
                  "Puning Hot Spring and Restaurant",
                  <div>
                    Puning Hot Spring, located in the province of Pampanga, is
                    one of the natural hot spring created by the eruption of Mt.
                    Pinatubo in 1991. Found in the town of Porac, the hot spring
                    stands at the foot of the volcano and amidst the green
                    mountain ranges. The name of the place was derived from an
                    Aeta word “punang” or “mapunang” which means full of trees
                    then eventually evolved to its present name. The hot spring
                    is managed by the local community of Aetas and the first
                    inhabitants of the land since the eruption.
                    <br />
                    <br />
                    Inside the hot spring, there are several cottages offered to
                    visitors. Restrooms and a shower area are also available
                    within the vicinity. Puning has pools varying in sizes with
                    hot water ranging from 40 degrees to 70 degrees. Being near
                    the volcano, the water comes from the Sacobia River and is
                    naturally heated by the active volcano. For those who are
                    not into hot water, the place also offers pools with cold
                    water.
                    <br />
                    <br />
                    In addition to this, Puning has another station which is the
                    Steam Spa consisting of two areas. The first area is the
                    Sand Spa. Guests are asked to wear a gown and lay down on a
                    bed of sand; then their bodies will be covered with ash
                    remnants for fifteen minutes. The second one is for the
                    mudpack where volcanic ashes mixed with eucalyptus will be
                    spread out in your face and body that will help tighten
                    pores and cool your body temperature.
                    <br />
                    <br />
                    <i>Best time to visit</i>
                    <br />
                    It is an all-year-round destination that can be visited
                    anytime.
                    <br />
                    <br />
                    <i>Address</i>
                    <br />
                    Sitio Target, Barangay, Angeles, 2009 Pampanga
                    <br />
                    <br />
                    For inquiry and reservation 09687240148/09196862223
                    <br />
                    Link: https://www.facebook.com/PuningHotSpringAndRestaurant/
                  </div>
                )
              }
            >
              Puning Hot Spring
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SidePanel;
