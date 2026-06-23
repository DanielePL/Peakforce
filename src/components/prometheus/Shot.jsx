import { ImageIcon } from 'lucide-react'

/**
 * Product screenshot frame. Pass `src` once a real (orange Prometheus demo)
 * screenshot is available and it renders the image; until then it shows a
 * clean labelled placeholder in a browser/device chrome.
 */
export default function Shot({
  src,
  label,
  caption,
  tone = 'dark',
  device = 'browser', // 'browser' | 'phone'
  aspect,
  className = '',
}) {
  const dark = tone === 'dark'
  const isPhone = device === 'phone'
  const ratio = aspect || (isPhone ? 'aspect-[9/19]' : 'aspect-[16/10]')

  const frame = dark
    ? 'border-white/10 bg-white/[0.03]'
    : 'border-border bg-muted'

  return (
    <figure className={`w-full ${className}`}>
      <div
        className={`relative ${ratio} w-full overflow-hidden border ${frame} ${
          isPhone ? 'rounded-[2rem] mx-auto max-w-[300px]' : 'rounded-xl'
        }`}
      >
        {/* chrome */}
        {!isPhone && (
          <div
            className={`flex items-center gap-1.5 px-4 h-9 border-b ${
              dark ? 'border-white/10' : 'border-border'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-prometheus/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-prometheus/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-prometheus/20" />
          </div>
        )}

        {src ? (
          <img
            src={src}
            alt={label}
            loading="lazy"
            className={`absolute inset-x-0 bottom-0 w-full ${
              isPhone ? 'inset-y-0 h-full object-cover' : 'top-9 object-cover object-top'
            }`}
            style={isPhone ? undefined : { height: 'calc(100% - 2.25rem)' }}
          />
        ) : (
          <div
            className={`absolute inset-0 ${
              isPhone ? '' : 'top-9'
            } flex flex-col items-center justify-center gap-3 text-center px-6`}
          >
            <ImageIcon
              size={28}
              className={dark ? 'text-white/25' : 'text-foreground/20'}
            />
            <p
              className={`text-sm font-medium ${
                dark ? 'text-primary-foreground/80' : 'text-foreground/70'
              }`}
            >
              {label}
            </p>
            <span className="text-[10px] uppercase tracking-[0.22em] text-prometheus">
              Prometheus · Demo
            </span>
          </div>
        )}
      </div>
      {caption && (
        <figcaption
          className={`mt-3 text-sm leading-relaxed ${
            dark ? 'text-primary-foreground/55' : 'text-muted-foreground'
          }`}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
