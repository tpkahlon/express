import React from 'react';
import ReactPlayer from 'react-player';
import { Nav, Row, Col, Tab } from 'react-bootstrap';

const Channels = ({ data }) => {
  return (
    <>
      <Tab.Container id="tab" defaultActiveKey={data[0].name} className="py-3">
        <Row>
          <Col xs={12} md={6} lg={4} className="order-2">
            <div className="title overflow-auto shadow-lg rounded">
              <Nav variant="pills" className="flex-column">
                {data.map((i, index) => (
                  <Nav.Item key={index}>
                    <Nav.Link eventKey={i.name}>{i.name}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </div>
          </Col>
          <Col xs={12} md={6} lg={8} className="order-1">
            <Tab.Content>
              {data.map((i, index) => {
                const parser = new DOMParser();
                const dom = parser.parseFromString(i.url, 'text/html');
                const items = dom.querySelector('.item-section')
                  ? dom.querySelector('.item-section')
                  : null;
                if (items === null) {
                  return false;
                }
                const channelURL = items.children[0].querySelector(
                  '.yt-lockup-title'
                )
                  ? items.children[0].querySelector('.yt-lockup-title')
                      .children[0].attributes[0].value
                  : null;
                const channelThumbnail = items.children[0].querySelector(
                  '.yt-thumb-simple'
                )
                  ? items.children[0].querySelector('.yt-thumb-simple')
                      .children[0].attributes[1].value
                  : null;
                if (channelURL === null || channelThumbnail === null) {
                  return false;
                }
                return (
                  <Tab.Pane eventKey={i.name} key={index}>
                    <ReactPlayer
                      url={`https://www.youtube.com${channelURL}`}
                      light={channelThumbnail}
                      className="w-100 video rounded shadow-lg overflow-hidden"
                      controls={true}
                    />
                  </Tab.Pane>
                );
              })}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default Channels;
