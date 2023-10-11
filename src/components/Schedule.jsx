import { Container } from '@/components/Container'

import {
  YellowCell,
  FourColumnGreyCell,
  TimeCell,
  BlueCell,
  EmptyCell,
  TableHeader,
} from './ProgramTable'

export function Schedule({ id }) {
  return (
    <section id={id} aria-label="Schedule">
      <Container>
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
              <YellowCell suptitle="Lightning Talks" />
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
          <tbody></tbody>
        </table>
        <table class="table-fix my-20 w-full">
          <TableHeader
            hasScientificTrack
            day={3}
            date="Sunday, November 12, 2023"
          />
          <tbody></tbody>
        </table>
      </Container>
    </section>
  )
}
