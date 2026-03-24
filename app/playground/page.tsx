import Sidebar from '@/components/layout/Sidebar'
import Canvas from '@/components/playground/Canvas'
import PropsPanel from '@/components/playground/PropsPanel'

export default function PlaygroundPage() {
  return (
    <div className="playground">
      <Sidebar />
      <Canvas />
      <PropsPanel />
    </div>
  )
}
