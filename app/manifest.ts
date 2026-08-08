import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Siddhant Shrestha Portfolio',
    short_name: 'Siddhant Portfolio',
    description: 'Personal portfolio of Siddhant Shrestha, a Full Stack Developer specializing in building exceptional digital experiences.',
    start_url: '/',
    display: 'standalone',
    background_color: '#050505',
    theme_color: '#10b981',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/assets/img/circle-logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  }
}
