import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'

const Feature = ({ logo: Logo, name, description }) => (
  <Card className='w-full max-w-sm border-none'>
    <CardHeader className='space-y-5'>
      {Logo && <Logo className='w-12 h-12 mb-4 text-[var(--primary)]' />}
      <CardTitle className='text-lg'>{name}</CardTitle>
      <CardDescription className='text-[var(--muted-foreground)]'>
        {description}
      </CardDescription>
    </CardHeader>
  </Card>
)

export default Feature
