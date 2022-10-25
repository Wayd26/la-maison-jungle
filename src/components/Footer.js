import '../styles/Footer.css'

function Footer() {
	

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵 @ {(new Date().getFullYear())}
			</div>
			<div className='lmj-footer-elem'>par <em><b>Wassiou Ayedoun</b></em> </div>
			
		</footer>
	)
}
export default Footer