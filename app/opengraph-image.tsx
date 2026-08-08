import { ImageResponse } from 'next/og'

export const alt = 'Siddhant Shrestha | Full-Stack Developer & Creative Technologist'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #09090b 0%, #020617 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '80px',
          fontFamily: 'sans-serif',
          position: 'relative',
          border: '8px solid #10b981',
          boxSizing: 'border-box',
        }}
      >
        {/* Glowing Decorative Dots / Background Gradients */}
        <div
          style={{
            position: 'absolute',
            top: '-150px',
            right: '-150px',
            width: '500px',
            height: '500px',
            borderRadius: '250px',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.18) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-150px',
            left: '-150px',
            width: '500px',
            height: '500px',
            borderRadius: '250px',
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)',
          }}
        />

        {/* Top Header Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          {/* Logo Badge */}
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '22px',
              color: '#09090b',
            }}
          >
            S
          </div>
          <span
            style={{
              fontSize: '20px',
              fontWeight: 600,
              color: '#9ca3af',
              letterSpacing: '0.1em',
            }}
          >
            Siddhant Shrestha
          </span>
        </div>

        {/* Middle Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            maxWidth: '900px',
            marginTop: 'auto',
            marginBottom: 'auto',
          }}
        >
          {/* Title Pill */}
          <div
            style={{
              display: 'flex',
              padding: '6px 16px',
              borderRadius: '20px',
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              alignSelf: 'flex-start',
            }}
          >
            <span
              style={{
                fontSize: '14px',
                fontWeight: 700,
                color: '#10b981',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
              }}
            >
              Full-Stack Developer
            </span>
          </div>

          <div
            style={{
              fontSize: '64px',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Creative Tech & Modern Web Architect
          </div>

          <div
            style={{
              fontSize: '22px',
              color: '#9ca3af',
              lineHeight: 1.4,
            }}
          >
            Specializing in React, Next.js, TypeScript, and high-performance backend systems.
          </div>
        </div>

        {/* Bottom Footer Row */}
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '24px',
          }}
        >
          <span
            style={{
              fontSize: '16px',
              color: '#6b7280',
            }}
          >
            Portfolio & Resume
          </span>
          <span
            style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#10b981',
              letterSpacing: '0.05em',
            }}
          >
            siddhantshrestha.com.np
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
