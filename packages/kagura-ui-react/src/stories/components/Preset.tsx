export interface PresetProp {
  preset: 'mantine' | 'bootstrap',
  children?: React.ReactNode,
  className?: string
}
export default function Preset({ children = null, className = "", preset = "mantine" }: PresetProp) {

  return <div className={`${preset} ${className}`}>
    {children}
  </div>
}
