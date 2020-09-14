import React from 'react';

class Detail extends React.Component{
    componentDidMount(){
        const { location, history } = this.props; // this.props는 movie.js Link to={{}}를 가르킨다. 값은 {pathname: "/movie-details", search: "", hash: "", state: undefined} 반환된다.
        console.log(location, history) 

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