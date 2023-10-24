import { Container } from '@/components/Container'

import {
  YellowCell,
  FourColumnGreyCell,
  TimeCell,
  BlueCell,
  EmptyCell,
  TableHeader,
  ScientificTrackHeader,
} from './ProgramTable'

export function Schedule({ id }) {
  return (
    <section id={id} aria-label="Schedule">
      <Container className="relative">
        <p className="font-poppins text-2xl tracking-tight text-sotm-blue">
          The conference will be packed with great talks, workshops and
          opportunities to meet and network with the OpenStreetMap community.
        </p>
        <table class="table-fix my-20 w-full">
          <TableHeader day="1" date="Friday, November 10, 2023" />

          <tbody>
            <tr className="text-center">
              <TimeCell title="14:00 - 16:00" />
              <td
                colSpan={4}
                className="border border-sotm-yellow font-poppins text-sotm-blue"
              >
                <p>Mobile Mapping Workshop</p>
                <p className="font-bold">ACTIVE MOVEMENT</p>
                <p>by Andrew Hain</p>
                <p className="font-bold">
                  Antwerp Berchem Station Meeting Point
                </p>
              </td>
            </tr>
            <tr className="text-center">
              <TimeCell title="16:00 - 16:30" />
              <FourColumnGreyCell title="Walk-in & Registration" />
            </tr>
            <tr className="text-center">
              <TimeCell title="16:30 - 17:00" />
              <YellowCell title="Welcome Session" text="by OSM BE" />
              <EmptyCell />
              <EmptyCell />
              <EmptyCell />
            </tr>
            <tr className="text-center">
              <TimeCell title="17:00 - 18:00" />
              <YellowCell title="Meet your Mapper" text="by OSM BE" />
              <EmptyCell />
              <EmptyCell />
              <EmptyCell />
            </tr>
            <tr className="text-center">
              <TimeCell title="18:00 - 20:00" />
              <FourColumnGreyCell title="Networking & Drinks" />
            </tr>
          </tbody>
        </table>
        <table class="table-fix my-20 w-full">
          <TableHeader day="2" date="Saturday, November 11, 2023" />

          <tbody>
            <tr className="text-center">
              <TimeCell title="8:30 - 9:30" />
              <FourColumnGreyCell title="Walk-in & Registration" />
            </tr>

            <tr className="text-center">
              <TimeCell title="9:30 - 10:00" />
              <YellowCell title="Opening Session" text="by SOTM EU Team" />
              <EmptyCell />
              <EmptyCell />
              <EmptyCell />
            </tr>
            <tr className="text-center">
              <TimeCell title="10:00 - 10:30" />
              <YellowCell title="Opening Keynote" />
              <EmptyCell />
              <EmptyCell />
              <EmptyCell />
            </tr>
            <tr className="text-center">
              <TimeCell title="10:30 - 11:00" />
              <FourColumnGreyCell title="Break" />
            </tr>
            <tr className="text-center">
              <TimeCell title="11:00 - 11:30" />
              <YellowCell
                title="TALK"
                suptitle="Hiking Routes - the Past, the Present and the Future"
                text="by Sarah Hoffmann"
              />
              <YellowCell
                title="TALK"
                text="by Michael Reichert"
                suptitle="Vector tiles with the Shortbread schema"
              />
              <YellowCell
                rowSpan={2}
                title="WORKSHOP"
                text="by Joost Schouppe"
                suptitle="From Belgium to Europe: can European Local chapters work together and learn from each other?"
              />
              <YellowCell
                rowSpan={2}
                title="WORKSHOP"
                text="by Martin Raifer"
                suptitle="Hands on iD development"
              />
            </tr>
            <tr className="text-center">
              <TimeCell title="11:30 - 12:00" />
              <YellowCell
                title="TALK"
                suptitle="Quantifying Europe’s Cycling Infrastructure Using OpenStreetMap"
                text="by Aleksander Buczyński"
              />
              <YellowCell
                title="TALK"
                text="by Frédéric Rodrigo"
                suptitle="Clearance: monitoring and extracting data from OSM under quality constraints"
              />
            </tr>
            <tr className="text-center">
              <TimeCell title="12:00 - 12:30" />
              <YellowCell
                title="TALK"
                suptitle="Does OpenStreetMap Need a Trustmark?"
                text="by Stefan Keller"
              />
              <YellowCell title="LIGHTNING TALKS" />
              <YellowCell
                title="TALK"
                suptitle="Accessibility information for wheelchair users in OSM and the OnWheels app"
                text="by Robin Julien"
              />

              <EmptyCell />
            </tr>
          </tbody>
        </table>
        <table class="table-fix my-20 w-full">
          <TableHeader day={2} date="Saturday, November 11, 2023" />
          <tbody>
            <tr className="text-center">
              <TimeCell title="12:30 - 13:30" />
              <FourColumnGreyCell title="Lunch" />
            </tr>
            <tr className="text-center">
              <TimeCell title="13:30 - 14:00" />
              <YellowCell
                title="TALK"
                text="by Rubén Martín"
                suptitle="The Local Knowledge Dilemma: A Data-Driven Alert for OSM"
              />
              <YellowCell
                title="TALK"
                text="by Gregory Marler"
                suptitle="The Art of OpenStreetMap"
              />
              <YellowCell
                rowSpan={2}
                title="WORKSHOP"
                suptitle="Ungap the Map: Designing Moonshot Cycling Networks"
                text="by Dustin Carlino"
              />
              <YellowCell
                rowSpan={2}
                title="WORKSHOP"
                suptitle="Introducing the ohsomeNow stats dashboard - a workshop for measuring your impact"
                text="by Benjamin Herfort & Nicole Siggins"
              />
            </tr>
            <tr className="text-center">
              <TimeCell title="14:00 - 14:30" />
              <YellowCell
                title="TALK"
                suptitle="Sane Limits for New Accounts"
                text="by Roland Olbricht"
              />
              <YellowCell
                title="TALK"
                subptitle="Collecting street level pictures with centimetric geolocation at low cost"
                text="by Antoine Riche"
              />
            </tr>
            <tr className="text-center">
              <TimeCell title="14:30 - 15:00" />
              <YellowCell
                suptitle="OSM in Belgian train stations: welcome on board"
                title="TALK"
                text="by Julien Minet"
              />
              <YellowCell
                suptitle="Exploring OSM-based geospatial datasets: insights from the Italian National Summary Database (DBSN)"
                title="TALK"
                text="by Alessandro Sarretta"
              />
              <YellowCell
                suptitle="Mapy.cz – digital traditional hiking map of the whole world"
                title="TALK"
                text="by Jakub Zmrzlik"
              />
              <YellowCell
                suptitle="Liberated Maps: Challenges & Opportunities"
                title="TALK"
                text="by Luke Seelenbinder & Bart Louwers"
              />
            </tr>
            <tr className="text-center">
              <TimeCell title="15:00 - 15:30" />
              <FourColumnGreyCell title="Break" />
            </tr>
            <tr className="text-center">
              <TimeCell title="15:30 - 16:00" />
              <YellowCell
                suptitle="Mapillary: 2 billion images and beyond"
                title="TALK"
                text="by Edoardo Neerhut"
              />
              <YellowCell title="LIGHTNING TALKS" />
              <YellowCell
                rowSpan={2}
                suptitle="How to be an OpenStreetMap Social Media Ambassador: Using Storytelling to Build Community"
                title="WORKSHOP"
                text="by Courtney Williamson & Kate Varfalameyeva"
              />
              <YellowCell
                rowSpan={2}
                suptitle="How to put an entire country in a container: transportable OpenStreetMap data integration into Postgis using docker"
                title="WORKSHOP"
                text="by Benjamin Deswysen"
              />
            </tr>
            <tr className="text-center">
              <TimeCell title="16:00 - 16:30" />
              <YellowCell
                rowSpan={2}
                suptitle="Panoramax: the full FLOSS alternative for your ground level imagery"
                title="EXTENDED TALK"
                text="by Christian Quest"
              />
              <YellowCell
                rowSpan={2}
                suptitle="Modern osm2pgsql tricks"
                title="EXTENDED TALK"
                text="by Jochen Topf & Paul Norman"
              />
            </tr>
            <tr className="text-center">
              <TimeCell title="16:30 - 17:00" />
              <EmptyCell />
              <EmptyCell />
            </tr>
            <tr className="text-center">
              <TimeCell title="18:30 - 22:00" />
              <FourColumnGreyCell title="Social Night" />
            </tr>
          </tbody>
        </table>
        <table class="table-fix my-20 w-full">
          <TableHeader
            hasScientificTrack
            day={3}
            date="Sunday, November 12, 2023"
          />
          <tbody>
            <tr className="text-center">
              <TimeCell title="8:30 - 9:30" />
              <FourColumnGreyCell title="Walk-in & Registration" />
            </tr>
            <tr className="text-center">
              <TimeCell title="9:00 - 9:30" />
              <EmptyCell />
              <EmptyCell />
              <EmptyCell />
              <BlueCell title="OSMScience" />
            </tr>
            <tr className="text-center">
              <TimeCell title="9:30 - 10:00" />
              <YellowCell
                suptitle="Maintaining OpenStreetMap.org"
                title="TALK"
                text="by Andy Allan"
              />
              <YellowCell
                suptitle="Nominatim on your laptop"
                title="TALK"
                text="by Sarah Hoffmann"
              />
              <YellowCell
                rowSpan={2}
                suptitle="Mapping Pedestrian Network Acessibility on OpenStreetMap"
                title="WORKSHOP"
                text="by Kauê de Moraes Vestena"
              />
              <BlueCell title="OSMScience" />
            </tr>
            <tr className="text-center">
              <TimeCell title="10:00 - 10:30" />
              <YellowCell
                suptitle="OpenStreetMap and Overture:The case for collaboration."
                title="TALK"
                text="by Marc Prioleau"
              />
              <YellowCell
                rowSpan={2}
                suptitle="Stadia x Stamen: A New Era for Stamen Map Tiles"
                title="EXTENDED TALK"
                text="by Luke Seelenbinder & Stephanie May"
              />
              <BlueCell title="OSMScience" />
            </tr>
            <tr className="text-center">
              <TimeCell title="10:30 - 11:00" />
              <YellowCell
                suptitle="OpenStreetMap Foundation's budget and expenditures"
                title="TALK"
                text="by Roland Olbricht"
              />
              <YellowCell
                suptitle="Working together for a more coherent integration of EuroVelo routes on OpenStreetMap"
                title="TALK"
                text="by Florence Grégoire"
              />
              <BlueCell title="OSMScience" />
            </tr>
            <tr className="text-center">
              <TimeCell title="11:00 - 11:30" />
              <FourColumnGreyCell title="Break" />
            </tr>
            <tr className="text-center">
              <TimeCell title="11:30 - 12:00" />
              <YellowCell
                suptitle="OpenStreetMap (almost) at 20: Reflections and Future Predictions"
                title="TALK"
                text="by Steve Coast"
              />
              <YellowCell title="LIGHTNING TALKS" />
              <YellowCell
                rowSpan={2}
                suptitle="Using OpenStreetMap for Humanitarian Purposes - and introduction to the HOT Tasking Manager"
                title="WORKSHOP"
                text="by Nicole Siggins"
              />
              <BlueCell title="OSMScience" />
            </tr>
            <tr className="text-center">
              <TimeCell title="12:00 - 12:30" />
              <YellowCell
                suptitle="OSMF Board AMA"
                title="EXTENDED TALK"
                text="by Roland Olbricht"
                rowSpan={2}
              />
              <YellowCell
                suptitle="UN Maps Learning Hub: a multi-lingual educational platform on OSM"
                title="TALK"
                text="by Rachele Amerini"
              />
              <BlueCell title="OSMScience" />
            </tr>
            <tr className="text-center">
              <TimeCell title="12:30 - 13:00" />
              <YellowCell
                suptitle="Utilizing Crowdsourced Mapping to Enhance Food Security Among Lower OMO Agro-Pastoralists in Ethiopia"
                title="TALK"
                text="by Binyam Dele"
              />
              <YellowCell
                suptitle="A hiking map created by the Club Alpino Italiano - Parma Section"
                title="TALK"
                text="by Marco Barbieri"
              />
              <BlueCell title="OSMScience" />
            </tr>
          </tbody>
        </table>
        <table class="table-fix my-20 w-full">
          <TableHeader
            hasScientificTrack
            day={3}
            date="Sunday, November 12, 2023"
          />
          <tbody>
            <tr className="text-center">
              <TimeCell title="13:00 - 14:00" />
              <FourColumnGreyCell title="Lunch" />
            </tr>
            <tr className="text-center">
              <TimeCell title="14:00 - 14:30" />
              <YellowCell
                suptitle="Points of Interest Anyone?"
                title="TALK"
                text="by Ilya Zverev"
              />
              <YellowCell
                suptitle="Ramani-Maps: a new Android Compose library for Mapbox and MapLibre"
                title="TALK"
                text="by Jonas Vautherin"
              />
              <YellowCell
                suptitle="OSM-Wikidata Map Framework"
                title="TALK"
                text="by Daniele Santini"
              />
              <BlueCell title="OSMScience" />
            </tr>
            <tr className="text-center">
              <TimeCell title="14:30 - 15:00" />
              <YellowCell
                suptitle="10 years of power infrastructure mapping: what's next?"
                title="TALK"
                text="by François Lacombe"
                rowSpan={2}
              />
              <YellowCell
                suptitle="Exploring taginfo"
                title="TALK"
                text="by Jochen Topf"
              />
              <YellowCell
                suptitle="MapComplete - progress and presenting MapComplete Studio"
                title="WORKSHOP"
                text="by Pieter Vander Vennet"
                rowSpan={2}
              />
              <BlueCell title="OSMScience" />
            </tr>
            <tr className="text-center">
              <TimeCell title="15:00 - 15:30" />
              <YellowCell title="LIGHTNING TALKS" />
              <BlueCell title="OSMScience" />
            </tr>
            <tr className="text-center">
              <TimeCell title="15:30 - 16:00" />
              <FourColumnGreyCell title="Break" />
            </tr>
            <tr className="text-center">
              <TimeCell title="16:00 - 16:30" />
              <YellowCell title="Closing Session" text="by SotM EU Team" />
              <EmptyCell />
              <EmptyCell />
              <EmptyCell />
            </tr>
          </tbody>
        </table>
        <table class="table-fix my-20 w-full">
          <ScientificTrackHeader day={3} date="Sunday, November 12, 2023" />
          <tbody>
            <tr className="text-center">
              <TimeCell title="8:30 - 9:30" />
              <FourColumnGreyCell title="Walk-in & Registration" />
            </tr>
            <tr className="text-center">
              <TimeCell rowSpan={4} title="9:00 - 9:30" />
              <YellowCell
                colSpan={4}
                title="Assessing Bike-Transit Accessibility"
                text="by <br/> Reid Passmore - Georgia Institute of Technology <br/> Kari E Watkins - University of California at Davis <br/> Randall Guensler - Georgia Institute of Technology <br/>"
              />
            </tr>
            <tr className="text-center">
              <YellowCell
                colSpan={4}
                title="OpenStreetMap Data for Automated Labelling Machine Learning Examples: The Challenge of Road Type Imbalance"
                text="by Edson Augusto Melanda - Federal University of São Carlos; University of Heidelberg <br/> Benjamin Herfort - Heidelberg Institute for Geoinformation Technology <br/> Veit Ulrich - University of Heidelberg <br/> Francis Andorful - University of Heidelberg <br/> Alexander Zipf - University of Heidelberg - Hidelberg Institute for Geoinformation Technology <br/>"
              />
            </tr>
            <tr className="text-center">
              <YellowCell
                colSpan={4}
                title="Exploring Road and Points of Interest (POIs) Associations in OpenStreetMap, A New Paradigm for OSM Road class Prediction"
                text="by Andorful Francis - Heidelberg University <br/> Christina Ludwig - Heidelberg University <br/>"
              />
            </tr>
            <tr className="text-center">
              <YellowCell
                colSpan={4}
                title="Are Italian cities already 15-minute? Presenting a glocal proximity index, based on open data"
                text="by Beatrice Olivari - Deda Next <br/> Angela Cimini - Sapienza University of Rome, Italian National Institute for Environmental Protection and Research (ISPRA) <br/>"
              />
            </tr>
            <tr className="text-center">
              <TimeCell title="9:30 - 10:00" />
              <YellowCell
                title="Fostering OSM’s Micromapping Through Combined Use of Artificial Intelligence and Street-View Imagery"
                text="by <br/> Kauê de Moraes Vestena - Federal University of Paraná <br/> Silvana Philippi Camboim - Federal University of Paraná <br/> Daniel Rodrigues dos Santos - Militar Institute of Engineering"
              />
            </tr>
            <tr className="text-center">
              <TimeCell title="10:00 - 10:30" />
              <YellowCell
                title="Global and regional level of use of buildings and roads prepared by AI for OSM mapping"
                text="by <br/>Milan Fila, M.Sc. - Department of Geography, Faculty of Science, Masaryk University, Brno, Czechia <br/>Radim Štampach, Ph.D. - Department of Geography, Faculty of Science, Masaryk University, Brno, Czechia <br/>Benjamin Herfort, Ph.D. - Heidelberg Institute for Geoinformation Technology, Heidelberg, Germany"
              />
            </tr>
            <tr className="text-center">
              <TimeCell title="10:30 - 11:00" />
              <YellowCell
                title="BikeDNA: A Tool for Bicycle Infrastructure Data & Network Assessment"
                text="by<br/>Ane Rahbek Vierø - ITU Copenhagen<br/>Anastassia Vybornova - ITU Copenhagen"
              />
            </tr>
            <tr className="text-center">
              <TimeCell title="11:00 - 11:30" />
              <FourColumnGreyCell title="Break" />
            </tr>
            <tr className="text-center">
              <TimeCell title="11:30 - 12:00" />

              <YellowCell
                title="Towards an Open High-Resolution Land Use Dataset in Great Britain -“ Comparing and Consolidating Retail Centre Areas from Open Data Sources"
                text="by<br/>Oliver O'Brien - Consumer Data Research Centre, Department of Geography, University College London"
              />
            </tr>
            <tr className="text-center">
              <TimeCell title="12:00 - 12:30" />
              <YellowCell
                title="A Contemporary Nolli Map: Using OpenStreetMap Data to Represent Urban Public Spaces"
                text="by<br />Ester Scheck - FH Potsdam<br />Florian Ledermann - TU Wien<br />Marian Därk - FH Potsdam<br />Andrea Binn - TU Wien"
              />
            </tr>
            <tr className="text-center">
              <TimeCell rowSpan={5} title="12:30 - 13:00" />
              <YellowCell
                title="SPOT: A Natural Language Interface for Geospatial Searches in OSM"
                text="by<br/>Lynn Khellaf - Deutsche Welle - Research and Cooperation Projects<br/>Ipek Baris Schlicht - Deutsche Welle - Research and Cooperation Projects<br/>Ruben Bouwmeester - Deutsche Welle - Research and Cooperation Projects<br/>Tilman MiraÃŸ - Deutsche Welle - Research and Cooperation Projects<br/>Julia Bayer - Deutsche Welle - Research and Cooperation Projects<br/>Tilman Wagner - Deutsche Welle - Research and Cooperation Projects"
              />
            </tr>
            <tr className="text-center">
              <YellowCell
                title="Building a baseline of health facility data with OpenStreetMap"
                text="by<br/>Mark Herringer - The Global healthsites Mapping project (healthsites.io)<br/>Lamine Ndiaye - OpenStreetmap Senegal<br/>Andy South - Afrimapr"
              />
            </tr>
            <tr className="text-center">
              <YellowCell
                title="Beyond Two Dimensions: Large-Scale Building Height Mapping in OpenStreetMap via Synthetic Aperture Radar and Street-View Imagery"
                text="by<br/>Dr. Yao Sun - Chair of Data Science in Earth Observation, Technical University of Munich<br/>Dr. Hao Li - Professorship of Big Geospatial Data Management, Technical University of Munich"
              />
            </tr>
            <tr className="text-center">
              <YellowCell
                title="Utilizing OSM data in geospatial representation learning"
                text="by<br/>Piotr Gramacki - Wrocław University of Science and Technology<br/>Kacper Leśniara - Wrocław University of Science and Technology<br/>Kamil Raczycki - Wrocław University of Science and Technology<br/>Szymon Woźniak - Wrocław University of Science and Technology<br/>Piotr Szymański - Wrocław University of Science and Technology"
              />
            </tr>
            <tr className="text-center">
              <YellowCell
                title="Rural water point mapping with/in OSM: implications of recent research in Malawi"
                text="by<br/>Dr. Alistair Geddes - Geography, Division of Energy, Environment & Society, School of Humanities, Social Sciences & Law, University of Dundee, UK"
              />
            </tr>
            <tr className="text-center">
              <TimeCell title="13:00 - 14:00" />
              <FourColumnGreyCell title="Lunch" />
            </tr>
            <tr className="text-center">
              <TimeCell title="14:00 - 14:30" />
              <YellowCell
                title="Social, technical and political transformations in OpenStreetMap- From volunteered geographic information to embedding digital commons in platform capitalism"
                text="by<br/>Susanne Schräder-Bergen - Friedrich-Alexander-Universtität, Erlangen-Nürnberg, Germany"
              />
            </tr>
            <tr className="text-center">
              <TimeCell title="14:30 - 15:00" />
              <YellowCell
                title="A global and dynamic completeness assessment of the OpenStreetMap buildings"
                text="by<br/>Oostwegel, Laurens Jozef Nicolaas - GFZ German Research Centre for Geosciences<br/>Evaz Zadeh, Tara - GFZ German Research Centre for Geosciences<br/>Lingner, Lars - GFZ German Research Centre for Geosciences<br/>Schorlemmer, Danijel - GFZ German Research Centre for Geosciences"
              />
            </tr>
            <tr className="text-center">
              <TimeCell title="15:00 - 15:30" />
              <YellowCell
                title="Improving the accuracy of earthquake risk estimates with OpenStreetMap building data"
                text="by<br/>Tara Evaz Zadeh - GFZ-Potsdam<br/>Laurens Jozef Nicolaas Oostwegel - GFZ-Potsdam<br/>Lars Lingner - GFZ-Potsdam<br/>Simantini Shinde - GFZ-Potsdam<br/>Fabrice Cotton - GFZ-Potsdam<br/>Danijel Schorlemmer - GFZ-Potsdam"
              />
            </tr>
          </tbody>
        </table>
      </Container>
    </section>
  )
}
