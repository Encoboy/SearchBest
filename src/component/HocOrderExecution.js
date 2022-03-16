/**
 * 一个高阶组件，实现控制组件执行渲染 A渲染完才开始B渲染，B渲染完才开始C渲染
 */
import React, { Component, useEffect } from "react";

// my code
export default function HocOrderExecution() {
  let renderQue = []; // 存放需要控制渲染队列
  return function Hoc(Com) {
    // component 要渲染的组件
    function RenderComQue() {
      useEffect(() => {
        if (renderQue.length > 0) {
          console.log("通知下一个组件可以开始渲染了");
          renderQue.shift()();
        }
      });
      return <Com />;
    }
    return class extends Component {
      constructor(props) {
        super(props);
        this.state = {
          isRender: false,
        };
        renderQue.length === 0 && (this.isFirstRender = true);
        renderQue.push(() => {
          this.setState({ isRender: true });
        });
      }
      isFirstRender = false;
      controlRender() {
        if (renderQue.length > 0) {
          renderQue.shift()();
        }
      }
      componentDidMount() {
        this.isFirstRender && this.controlRender();
      }
      render() {
        return <>{this.state.isRender ? <RenderComQue /> : null}</>;
      }
    };
  };
}

// other code
// export default function HocOrderExecution() {
//   const renderQueue = []; /* 待渲染队列 */
//   return function Hoc(Component) {
//     function RenderController(props) {
//       /* RenderController 用于真正挂载原始组件  */
//       const { renderNextComponent, ...otherprops } = props;
//       useEffect(() => {
//         renderNextComponent(); /* 通知执行下一个需要挂载的组件任务 */
//       }, []);
//       return <Component {...otherprops} />;
//     }

//     return class Wrap extends React.Component {
//       constructor() {
//         super();
//         this.state = {
//           isRender: false,
//         };
//         const tryRender = () => {
//           this.setState({
//             isRender: true,
//           });
//         };
//         if (renderQueue.length === 0) this.isFirstRender = true;
//         renderQueue.push(tryRender);
//       }
//       isFirstRender = false; /* 是否是队列中的第一个挂载任务 */
//       renderNextComponent = () => {
//         /* 从更新队列中，取出下一个任务，进行挂载 */
//         if (renderQueue.length > 0) {
//           console.log("挂载下一个组件");
//           const nextRender = renderQueue.shift();
//           nextRender();
//         }
//       };
//       componentDidMount() {
//         /* 如果是第一个挂载任务，那么需要 */
//         this.isFirstRender && this.renderNextComponent();
//       }
//       render() {
//         const { isRender } = this.state;
//         return isRender ? (
//           <RenderController
//             {...this.props}
//             renderNextComponent={this.renderNextComponent}
//           />
//         ) : null;
//       }
//     };
//   };
// }
