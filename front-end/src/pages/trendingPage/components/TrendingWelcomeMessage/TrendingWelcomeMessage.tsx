import { NavLink } from 'react-router-dom'
import { Button } from '../../../../components/ui/button'
import { Binary } from 'lucide-react'

const WelcomeMessage = () => {
  return (
    <div className='w-full flex justify-center items-center flex-col p-16 md:p-24 gap-5'>
      <div className="text-center">
        <h1 className=' text-4xl font-bold '><Binary className="inline text-lime-500" /> Welcome <Binary className="inline text-lime-500" /></h1>
        <p className='text-2xl'>To start Check out the tool box up top, select the language and genre.</p>
      </div>
      <div className="">
        <p className='text-lg p-1'><span className='font-bold  underline'>  Table Button :</span> is to show the trending in table form.</p>
        <p className='text-lg p-1'><span className='font-bold underline'>Genre Button :</span> analyze the trending and give you top 5 genres.</p>

      </div>
      <div className="">

        <NavLink to={"../../contact"}>
          <Button>Contact Us</Button>
        </NavLink>
        <p className='text-lg inline ms-2'>for any help you can contact us any time.</p>

      </div>
    </div>
  )
}

export default WelcomeMessage