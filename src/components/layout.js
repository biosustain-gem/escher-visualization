import React from 'react';
import SplitPane from 'react-split-pane';
import './layout.scss';

function ContainerDimensions({ children }) {
  const ref = React.useRef(null);
  const [size, setSize] = React.useState({ width: 0, height: 0 });

  React.useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(entries => {
      const { width, height } = entries[0].contentRect;
      setSize({ width, height });
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ width: '100%', height: '100%' }}>
      {React.cloneElement(children, { width: size.width, height: size.height })}
    </div>
  );
}

const s_layout = {
	display: "flex",
	flexDirection: "column",
	height: "100vh"
};

const s_body = {
	position: "relative",
	height: "100%"
};

class Layout extends React.Component {
		render() {
			return <div style={s_layout}>
				<div style={s_body}>
					<SplitPane split="vertical" minSize={50} defaultSize={250} >
						{this.props.children[0]}
						<ContainerDimensions>
							{this.props.children[1]}
						</ContainerDimensions>
					</SplitPane>
				</div>
			</div>
		};
}

export default Layout;
