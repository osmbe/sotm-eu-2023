import Image from 'next/image'

import { Container } from '@/components/Container'
import Logo from '@/images/logos/SOTM_Blue_full_logo_black.png'
import LogoAntwerpBlue from '@/images/icons/Antwerp_Icon_Blue.svg'


export function ProgramTable({ id }) {
  return (
    <Container>
      <table class="table-fix w-full">
        <thead>
          <tr>
            <th className='bg-blue-400' rowSpan={4}>
              
              <Image
                src={LogoAntwerpBlue}
                height={160}
                alt='antwerp logo'
              />
            </th>
            <th colSpan={4}>
              <div className="flex justify-between w-full">
                <div className='grow'>
                  <Image
                    src={Logo}
                    height={80}
                    alt="State of the Map EU 2023"
                  />
                </div>
                <div class="text-right">
                  <h3 className="font-dunbar text-2xl font-bold text-sotm-blue sm:text-3xl">
                    Program Day1
                  </h3>
                  <p className="font-dunbar text-2xl font-light text-black sm:text-3xl">
                    Friday, November 10, 2023
                  </p>
                </div>
              </div>
            </th>
          </tr>
          <tr className=''>
            <td className='border border-sotm-yellow text-center bg-gray-200 font-medium text-sotm-blue font-poppins' colSpan={4}>General Session</td>
          </tr>
          <tr>
            <td className='border border-sotm-yellow bg-yellow-200 text-center text-sotm-blue font-poppins p-2'>
              <div className='font-bold'>Something</div>
              <div>Something</div>
            </td>
            <td className='border border-sotm-yellow bg-yellow-200 text-center text-sotm-blue font-poppins p-2'>
              <div className='font-bold'>Something</div>
              <div>Something</div>
            </td>
            <td className='border border-sotm-yellow bg-yellow-200 text-center text-sotm-blue font-poppins p-2'>
              <div className='font-bold'>Something</div>
              <div>Something</div>
            </td>
            <td className='border border-sotm-yellow bg-yellow-200 text-center text-sotm-blue font-poppins p-2'>
              <div className='font-bold'>Something</div>
              <div>Something</div>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>General Session</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
