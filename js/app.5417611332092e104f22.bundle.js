(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(y,x,e)=>{const a=e(377),{lightningChart:t,AxisTickStrategies:r,UIElementBuilders:n,Themes:u}=a,c=t({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}).ChartXY({theme:u[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setTitle("Product version distribution").setUserInteractions(void 0),s=(y,x)=>c.addPointLineAreaSeries().setName(`Version ${y}`),o=s(1),J=s(2),i=s(3),p=s(4),l=s(5),A=s(6),g=s(7),M=s(8),d=s(9),S=s(10),v=s(11),b=s(12),h=c.getDefaultAxisX().setScrollStrategy(void 0).setTickStrategy(r.Empty),D=(y,x,e)=>{y.map(((y,x)=>({x,y:y.y}))).forEach(((a,t)=>{x.add(a),e&&((y,x)=>{h.addCustomTick().setValue(x).setGridStrokeLength(0).setTextFormatter((e=>y[x].x))})(y,t)}))};D([{x:"Jan-17",y:1.3},{x:"Feb-17",y:1.1},{x:"Mar-17",y:1},{x:"Apr-17",y:.8},{x:"May-17",y:.7},{x:"Jun-17",y:.6},{x:"Jul-17",y:.6},{x:"Aug-17",y:.5},{x:"Sep-17",y:.4},{x:"Oct-17",y:.4},{x:"Nov-17",y:.3},{x:"Dec-17",y:.3}],o,!0),D([{x:"Jan-17",y:4.9},{x:"Feb-17",y:4},{x:"Mar-17",y:3.7},{x:"Apr-17",y:3.2},{x:"May-17",y:2.8},{x:"Jun-17",y:2.4},{x:"Jul-17",y:2.3},{x:"Aug-17",y:2},{x:"Sep-17",y:1.7},{x:"Oct-17",y:1.5},{x:"Nov-17",y:1.2},{x:"Dec-17",y:1.1}],J),D([{x:"Jan-17",y:6.8},{x:"Feb-17",y:5.9},{x:"Mar-17",y:5.4},{x:"Apr-17",y:4.6},{x:"May-17",y:4.1},{x:"Jun-17",y:3.5},{x:"Jul-17",y:3.3},{x:"Aug-17",y:3},{x:"Sep-17",y:2.6},{x:"Oct-17",y:2.2},{x:"Nov-17",y:1.8},{x:"Dec-17",y:1.5}],i),D([{x:"Jan-17",y:2},{x:"Feb-17",y:1.7},{x:"Mar-17",y:1.5},{x:"Apr-17",y:1.3},{x:"May-17",y:1.2},{x:"Jun-17",y:1},{x:"Jul-17",y:1},{x:"Aug-17",y:.9},{x:"Sep-17",y:.7},{x:"Oct-17",y:.6},{x:"Nov-17",y:.5},{x:"Dec-17",y:.4}],p),D([{x:"Jan-17",y:25.2},{x:"Feb-17",y:22.6},{x:"Mar-17",y:20.8},{x:"Apr-17",y:18.8},{x:"May-17",y:17.1},{x:"Jun-17",y:15.1},{x:"Jul-17",y:14.5},{x:"Aug-17",y:13.4},{x:"Sep-17",y:12},{x:"Oct-17",y:10.3},{x:"Nov-17",y:8.6},{x:"Dec-17",y:7.6}],l),D([{x:"Jan-17",y:11.3},{x:"Feb-17",y:10.1},{x:"Mar-17",y:9.4},{x:"Apr-17",y:8.7},{x:"May-17",y:7.8},{x:"Jun-17",y:7.1},{x:"Jul-17",y:6.7},{x:"Aug-17",y:6.1},{x:"Sep-17",y:5.4},{x:"Oct-17",y:4.8},{x:"Nov-17",y:3.8},{x:"Dec-17",y:3.5}],A),D([{x:"Jan-17",y:22.8},{x:"Feb-17",y:23.3},{x:"Mar-17",y:23.1},{x:"Apr-17",y:23.3},{x:"May-17",y:23.3},{x:"Jun-17",y:21.7},{x:"Jul-17",y:21},{x:"Aug-17",y:20.2},{x:"Sep-17",y:19.2},{x:"Oct-17",y:17.6},{x:"Nov-17",y:15.4},{x:"Dec-17",y:14.4}],g),D([{x:"Jan-17",y:24},{x:"Feb-17",y:29.6},{x:"Mar-17",y:31.3},{x:"Apr-17",y:31.2},{x:"May-17",y:31.8},{x:"Jun-17",y:32.2},{x:"Jul-17",y:32},{x:"Aug-17",y:29.7},{x:"Sep-17",y:28.1},{x:"Oct-17",y:25.5},{x:"Nov-17",y:22.7},{x:"Dec-17",y:21.3}],M),D([{x:"Jan-17",y:.3},{x:"Feb-17",y:.5},{x:"Mar-17",y:2.4},{x:"Apr-17",y:6.6},{x:"May-17",y:10.6},{x:"Jun-17",y:14.2},{x:"Jul-17",y:15.8},{x:"Aug-17",y:19.3},{x:"Sep-17",y:22.3},{x:"Oct-17",y:22.9},{x:"Nov-17",y:20.3},{x:"Dec-17",y:18.1}],d),D([{x:"Jan-17",y:0},{x:"Feb-17",y:.2},{x:"Mar-17",y:.4},{x:"Apr-17",y:.5},{x:"May-17",y:.9},{x:"Jun-17",y:1.6},{x:"Jul-17",y:2},{x:"Aug-17",y:4},{x:"Sep-17",y:6.2},{x:"Oct-17",y:8.2},{x:"Nov-17",y:10.5},{x:"Dec-17",y:10.1}],S),D([{x:"Jan-17",y:0},{x:"Feb-17",y:0},{x:"Mar-17",y:0},{x:"Apr-17",y:0},{x:"May-17",y:0},{x:"Jun-17",y:0},{x:"Jul-17",y:.2},{x:"Aug-17",y:.5},{x:"Sep-17",y:.8},{x:"Oct-17",y:4.9},{x:"Nov-17",y:11.4},{x:"Dec-17",y:14}],v),D([{x:"Jan-17",y:0},{x:"Feb-17",y:0},{x:"Mar-17",y:0},{x:"Apr-17",y:0},{x:"May-17",y:0},{x:"Jun-17",y:0},{x:"Jul-17",y:0},{x:"Aug-17",y:0},{x:"Sep-17",y:.3},{x:"Oct-17",y:.8},{x:"Nov-17",y:3.2},{x:"Dec-17",y:7.5}],b),c.getDefaultAxisY().setTitle("Percentage").setScrollStrategy(void 0).setInterval({start:0,end:50,stopAxisAfter:!1})}},y=>{y.O(0,[502],(()=>y(y.s=44))),y.O()}]);