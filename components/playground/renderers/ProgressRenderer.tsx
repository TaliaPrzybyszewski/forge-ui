'use client'
import { hexRgb } from './_utils'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProgressRenderer({ props: p }: { props: any }) {
  const col = p.color||'#7F77DD'; const rgb = hexRgb(col)
  const secondary = [['Tasks',78,'#7F77DD'],['Storage',45,'#378ADD'],['Speed',92,'#1D9E75']]
  return (
    <div style={{width:280,display:'flex',flexDirection:'column',gap:16}}>
      <div>
        {p.showLabel&&<div style={{display:'flex',justifyContent:'space-between',marginBottom:8}}>
          <span style={{fontSize:11,color:'rgba(240,237,232,.5)',fontFamily:'Inter'}}>{p.label}</span>
          {p.showValue&&<span style={{fontSize:11,color:'rgba(240,237,232,.4)',fontFamily:'Inter'}}>{p.value}%</span>}
        </div>}
        <div style={{height:p.height,background:'#1a1a1d',borderRadius:p.radius,overflow:'hidden'}}>
          <div style={{height:'100%',width:`${p.value}%`,background:p.striped?`repeating-linear-gradient(45deg,${col},${col} 10px,rgba(255,255,255,.1) 10px,rgba(255,255,255,.1) 20px)`:col,borderRadius:p.radius,transition:'width .6s',boxShadow:`0 0 10px rgba(${rgb},.3)`}}/>
        </div>
      </div>
      <div style={{opacity:.4}}>
        {secondary.map(([l,v,c])=>(
          <div key={String(l)} style={{marginBottom:9}}>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:5}}>
              <span style={{fontSize:11,color:'rgba(240,237,232,.5)',fontFamily:'Inter'}}>{l}</span>
              <span style={{fontSize:11,color:'rgba(240,237,232,.35)',fontFamily:'Inter'}}>{v}%</span>
            </div>
            <div style={{height:3,background:'#1a1a1d',borderRadius:2}}>
              <div style={{height:'100%',width:`${v}%`,background:String(c),borderRadius:2}}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
