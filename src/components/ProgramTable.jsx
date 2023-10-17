import Image from 'next/image'
import Logo from '@/images/logos/SOTM_Blue_full_logo_black.png'
import Fountain from '../images/fountain.jpg'

export const YellowCell = ({ title, text, suptitle, rowSpan = 1 }) => (
  <td
    rowSpan={rowSpan}
    className="border border-sotm-yellow bg-sotm-yellow-200 p-2 text-center font-poppins text-sotm-blue"
  >
    <div className="text-xs font-bold">{suptitle}</div>
    <div className="font-bold">{title}</div>
    <div>{text}</div>
  </td>
)

export const FourColumnGreyCell = ({ title }) => (
  <td
    colSpan={4}
    className="border border-sotm-yellow bg-gray-100 font-dunbar text-2xl font-bold text-sotm-blue"
  >
    {title}
  </td>
)

export const TimeCell = ({ title }) => (
  <td className="border bg-sotm-blue py-2 text-white">{title}</td>
)

export const BlueCell = ({ title }) => (
  <td className="border border-sotm-blue bg-indigo-500 font-poppins text-xl text-white">
    {title}
  </td>
)

export const EmptyCell = () => <td className="border border-gray-200"></td>

export const TableHeader = ({ day, date, hasScientificTrack = false }) => (
  <thead>
    <tr>
      <th
        style={{ width: 150, padding: 0 }}
        className="bg-gradient-to-r from-indigo-500 to-blue-300"
        rowSpan={4}
      >
        <Image src={Fountain} width={150} alt="fountain" />
      </th>
      <th colSpan={4}>
        <div className="flex w-full justify-between">
          <div className="grow">
            <Image src={Logo} height={80} alt="State of the Map EU 2023" />
          </div>
          <div class="text-right">
            <h3 className="font-dunbar text-3xl font-bold text-sotm-blue sm:text-4xl">
              Program Day{day}
            </h3>
            <p className="font-dunbar text-2xl font-medium text-black sm:text-3xl">
              {date}
            </p>
          </div>
        </div>
      </th>
    </tr>
    <tr>
      <td
        className="border border-sotm-yellow bg-gray-100 text-center font-poppins font-bold text-sotm-blue"
        colSpan={hasScientificTrack ? 3 : 4}
      >
        General Session
      </td>
      {hasScientificTrack && (
        <td className="border border-sotm-yellow bg-gray-100 text-center font-poppins font-bold text-sotm-blue">
          Scientific Track
        </td>
      )}
    </tr>
    <tr>
      <YellowCell title="Marco Polo" text="Node Track" />
      <YellowCell title="Orangerie" text="Way Track" />
      <YellowCell title="Sacagawea" text="Relation Track" />
      <YellowCell title="Vasco Da Gama" text="Tech Track" />
    </tr>
  </thead>
)
