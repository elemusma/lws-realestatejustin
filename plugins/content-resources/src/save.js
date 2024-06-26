/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import { RawHTML } from '@wordpress/element';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	const blockProps = useBlockProps.save();

	const Content = ({ column }) => (
		<div class={`${column.inner_col_class}`} style={`${column.inner_col_style}`}>
		
		<div className={``} data-aos={column.data_aos} data-aos-delay={column.data_aos_delay}>
			<div className={`position-relative`}>
				<p className={`bold`} style={{ cursor: 'pointer', marginBottom: '0px' }}><RichText.Content value={column.title} /></p>
				{column.img && (
					<img
						src={column.img}
						alt={column.title}
						className={`w-100 h-auto${column.img_class}`}
						style={`${column.img_style}`}
					/>
				)}
				<p style={{ margin: '1px' }}><RichText.Content value={column.content} /></p>
			</div>
		</div>
		</div>
	);

	return (
		<div {...blockProps}>
			<section
				className={`position-relative ${attributes.section_class}`}
				style={`padding:50px 0;${attributes.section_style}`}
				id={attributes.section_id}
			>
				{attributes.section_image && (
					<img
						src={attributes.section_image}
						alt={attributes.section_image_alt}
						className={`w-100 h-100 position-absolute bg-img ${attributes.section_image_class}`}
						style={`top:0;left:0;object-fit:cover;pointer-events:none;${attributes.section_image_style}`}
					/>
				)}

				<RawHTML>{attributes.section_block}</RawHTML>

				<div
					className={attributes.container_class}
					style={attributes.container_style}
					id={attributes.container_id}
				>
					<div
						className={attributes.row_class}
						style={attributes.row_style}
						id={attributes.row_id}
					>
					<div
						className={attributes.main_col_content_class}
						style={attributes.main_col_content_style}
					>
						<InnerBlocks.Content />
					</div>
						{attributes.columns.map((column, index) => (
							<div key={index} className={`position-relative text-center ${column.col_class}`} style={column.col_style}>
								{column.url ? (
									<a href={column.url} target={column.link_target} title={column.link_title}>
										<Content column={column} />
									</a>
								) : (
									<Content column={column} />
								)}
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}