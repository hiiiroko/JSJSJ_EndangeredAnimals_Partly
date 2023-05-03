import './Protection.css'
import './P_Transition.css'
import React, { PureComponent } from "react"
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import P_Info from './P_Info'
import P_OptionJson from './P_OptionJson';
import * as eCharts from "echarts"

const options = ['habitat', 'research', 'species', 'reserve', 'education', 'cooperation'];

export default class Protection extends PureComponent {

  constructor() {
    super(...arguments);
    this.state = {
      option: options[0],
    };
  }

  PRoieeeRef = React.createRef();

  componentDidMount() {
    this.renderCharts(0)
  }

  renderCharts = (arg) => {

    if (PRoieee || option) {
      PRoieee.dispose();
      option = undefined;
    }
    if (!PRoieee && !option) {
      var PRoieee = eCharts.init(this.PRoieeeRef.current);
      var option;
    }

    option = undefined;
    option = P_OptionJson[arg];
    PRoieee.clear() 
    option && PRoieee.setOption(option);
  }

  switchOption = (arg) => {
    this.setState({ option: arg },
      () => {
        console.log(`Now the option is ${this.state.option}.`);
        console.log(`Now the index is ${options.indexOf(this.state.option)}.`)
      })
    this.renderCharts(options.indexOf(arg))
  }

  render() {
    return (
      // <div className='PRoieee' style={{
      //   width: 1200,
      //   height: 800,
      // }} ref={this.PRoieeeRef}></div>
      <div className="Protection">
        {/* Pcontrol和Ppanel并列 */}
        <div className='Pcontrol'>
          <div className='PlineA'>
            <button className='hexagon' onClick={() => this.switchOption(options[0])}>栖息地保护</button>
            <button className='hexagon' onClick={() => this.switchOption(options[1])}>科学研究</button>
          </div>
          <div className='PlineB'>
            <button className='hexagon' onClick={() => this.switchOption(options[2])}>物种保护</button>
            <button className='null'></button>
            <button className='hexagon' onClick={() => this.switchOption(options[3])}>建立保护区</button>
          </div>
          <div className='PlineC'>
            <button className='hexagon' onClick={() => this.switchOption(options[4])}>教育宣传</button>
            <button className='hexagon' onClick={() => this.switchOption(options[5])}>国际合作</button>
          </div>
        </div>
        <div className='Ppanel'>
          <div className='Ppassage'>
            <div className='PDF'>
              <div className='PRoieee' style={{
                width: 400,
                height: 400,
              }} ref={this.PRoieeeRef}></div>
            </div>
            <TransitionGroup className={'P3Mz'}>
              {
                options.map((e, i) => {
                  if (this.state.option == e) {
                    return (
                      <CSSTransition
                        classNames="Pasuka"
                        timeout={1000}
                        key={i}>
                        <div className='PPite174'>
                          {P_Info[i]}
                        </div>
                      </CSSTransition>
                    )
                  }
                })
              }
            </TransitionGroup>
          </div>
        </div>
      </div >
    );
  }
}

// import './Protection.css'
// import './P_Transition.css'
// import React, { useState } from "react"
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import P_Info from './P_Info'
// import * as eCharts from "echarts"

// function Protection() {
//   const options = ['habitat', 'research', 'species', 'reserve', 'education', 'cooperation']
//   const [option, setOption] = useState(options[0])
//   const switchOption = (arg) => {
//     setOption(arg)
//     console.log(`Switch to ${arg}.`)
//   }

//   const charts = [

//   ]

//   const displayCharts = (e) => {
//     switch (e) {
//       case 'habitat':

//         break;
//       case 'research':

//         break;
//       case 'species':

//         break;
//       case 'reverse':

//         break;
//       case 'education':

//         break;
//       case 'cooperation':

//         break;

//     }
//   }

//   return (
//     <div className="Protection">
//       {/* Pcontrol和Ppanel并列 */}
//       <div className='Pcontrol'>
//         <div className='PlineA'>
//           <button className='hexagon' onClick={() => switchOption(options[0])}>栖息地保护</button>
//           <button className='hexagon' onClick={() => switchOption(options[1])}>科学研究</button>
//         </div>
//         <div className='PlineB'>
//           <button className='hexagon' onClick={() => switchOption(options[2])}>物种保护</button>
//           <button className='null'></button>
//           <button className='hexagon' onClick={() => switchOption(options[3])}>建立保护区</button>
//         </div>
//         <div className='PlineC'>
//           <button className='hexagon' onClick={() => switchOption(options[4])}>教育宣传</button>
//           <button className='hexagon' onClick={() => switchOption(options[5])}>国际合作</button>
//         </div>
//       </div>
//       <div className='Ppanel'>
//         <div className='Ppassage'>
//           <TransitionGroup className={'P3Mz'}>
//             {
//               options.map((e, i) => {
//                 if (option == e) {
//                   return (
//                     <CSSTransition
//                       classNames="Pasuka"
//                       timeout={1000}
//                       key={i}>
//                       <div className='PPite174'>{P_Info[i]}</div>
//                     </CSSTransition>
//                   )
//                 }
//               })
//             }
//           </TransitionGroup>
//         </div>
//       </div>
//     </div >
//   )
// }

// export default Protection