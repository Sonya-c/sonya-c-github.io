import './Icon.scss';

export default function Icon({
	iconName,
	iconExtension = "png",
	iconFolder = "/assets/icons/",
	showLabel = true,
	inline = false }) {

	return (
		<div className={"icon " + (inline ? "icon-inline" : "")}>
			<img
				className='icon-image'
				src={`${iconFolder}${iconName}.${iconExtension}`}
				alt="icon"
			/>
			{showLabel && <p className='icon-name'>{iconName}</p>}
		</div>
	);
}