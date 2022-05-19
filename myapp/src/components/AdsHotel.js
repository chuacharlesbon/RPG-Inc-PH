import {Row, Col} from 'react-bootstrap'

export default function AdsHotel(){

	return(

	<Row className="justify-content-center align-items-center bg-clear py-2">
	<h6 className="text-white text-center">This is an advertisement</h6>
	<Col xs={12} md={10} lg={8} xl={6} className="mx-auto text-center">
	<iframe
      src={`https://www.youtube.com/embed/jKQ7xw5vCoY`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      className="mx-auto text-center mt-3 video-card"
    />
    </Col>
    </Row>

	)
}