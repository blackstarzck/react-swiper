import React from 'react';

// function Detail(props){
//     console.log(props);
//     return(
//         <span>hello</span>
//     )
// }

class Detail extends React.Component{

    componentDidMount(){
        const candyMachine = {
            status: {
                name: "none",
                count: 5,
            },
            getCandy(){
                this.status.count--;
                return this.status.count;
            }
        }

        const { location, history } = this.props;

        if(location.state === undefined){
            history.push('/'); // ← 홈으로 이동
        }
    }
    render() {
        const { location } = this.props
        if(location.state){
            return <span>{ location.state.title }</span>
        }else{
            return null;
        }
    
    }
}

export default Detail;