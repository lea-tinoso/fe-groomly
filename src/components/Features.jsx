import { MapPin, Star, Clock } from 'lucide-react'

import Feature from './Feature'

import { features } from '@/lib/features'

const iconMap = { MapPin, Star, Clock }

const Features = () => {
  return (
    <div className='flex gap-8 justify-center items-center py-8'>
      {features.map(feature => (
        <Feature
          key={feature.name}
          logo={iconMap[feature.logo]}
          name={feature.name}
          description={feature.description}
          details={feature.details}
        />
      ))}
    </div>
  )
}

export default Features
