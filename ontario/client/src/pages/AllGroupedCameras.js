import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import GroupedCameras from "../components/GroupedCameras/GroupedCameras";

const AllGroupedCameras = () => {
  const [data, setData] = useState({
    cameras: [],
    error: false,
    loading: false,
  });
  useEffect(() => {
    setData({ ...data, loading: true });
    (async () => {
      try {
        const request = await fetch("/api/data");
        const json = await request.json();
        const { groupedcameras } = json;
        setData({ ...data, groupedCameras: groupedcameras, loading: false });
      } catch (err) {
        setData({ ...data, error: true, loading: false });
      }
    })();
    // eslint-disable-next-line
  }, []);
  if (data.error) return <ErrorMessage />;
  if (!data.groupedCameras || data.groupedCameras.length === 0)
    return <Loading />;
  return <GroupedCameras groupedCameras={data.groupedCameras} />;
};

export default AllGroupedCameras;

// import React, { useState, useEffect } from "react";
// import { Row, Col, Table, Button, Image } from "react-bootstrap";
// import Loading from "../components/Loading";
// import ErrorMessage from "../components/ErrorMessage";

// const GroupedCamera = ({ groupedCamera }) => {
//   return (
//     <tr>
//       <td className="text-capitalize">{groupedCamera.Views[0].Name}</td>
//       <td>{groupedCamera.Organization}</td>
//       <td>{groupedCamera.DirectionOfTravel}</td>
//       <td>
//         <Image
//           className="rounded shadow"
//           fluid
//           src={groupedCamera.Views[0].Url}
//         />
//       </td>
//       <td>{groupedCamera.Latitude}</td>
//       <td>{groupedCamera.Longitude}</td>
//       <td>
//         <Button
//           target="_blank"
//           rel="noopener noreferrer"
//           href={`https://www.google.com/maps/search/?api=1&query=${groupedCamera.Latitude},${groupedCamera.Longitude}`}
//           variant="outline-primary"
//           size="sm"
//         >
//           Check Map
//         </Button>
//       </td>
//     </tr>
//   );
// };

// const GroupedCameras = () => {
//   const [data, setData] = useState({
//     groupedCameras: [],
//     error: false,
//     loading: false,
//   });
//   useEffect(() => {
//     setData({ ...data, loading: true });
//     (async () => {
//       try {
//         const request = await fetch("/api/data");
//         const json = await request.json();
//         const { groupedcameras } = json;
//         setData({
//           ...data,
//           groupedCameras: groupedcameras,
//           loading: false,
//         });
//       } catch (err) {
//         setData({ ...data, error: true, loading: false });
//       }
//     })();
//     // eslint-disable-next-line
//   }, []);
//   if (data.error) return <ErrorMessage />;
//   if (!data.groupedCameras || data.groupedCameras.length === 0)
//     return <Loading />;
//   return (
//     <>
//       <h2>Grouped Cameras</h2>
//       <hr />
//       <Row>
//         <Col xs className="mb-3">
//           <Table responsive bordered hover striped>
//             <thead>
//               <tr>
//                 <th>Roadway Name</th>
//                 <th>Organization</th>
//                 <th>Direction Of Travel</th>
//                 <th>Picture</th>
//                 <th>Latitude</th>
//                 <th>Longitude</th>
//                 <th>Check Map</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.groupedCameras
//                 .sort((a, b) =>
//                   a.Views[0].Name.toLowerCase() < b.Views[0].Name.toLowerCase()
//                     ? -1
//                     : 1
//                 )
//                 .map((groupedCamera) => (
//                   <GroupedCamera
//                     groupedCamera={groupedCamera}
//                     key={groupedCamera.Id}
//                   />
//                 ))}
//             </tbody>
//           </Table>
//         </Col>
//       </Row>
//     </>
//   );
// };

// export default GroupedCameras;
