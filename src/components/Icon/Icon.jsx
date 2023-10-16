import './Icon.scss';

export default function Icon({
	iconName,
	iconExtension = "png",
	iconFolder = "/assets/icons/",
	showLabel = true, }) {

	return (
		<div className="icon">
			<img
				className='icon-image'
				src={`${iconFolder}${iconName}.${iconExtension}`}
				alt="icon"
			/>
			{showLabel && <p className='icon-name'>{iconName}</p>}
		</div>
	);
}