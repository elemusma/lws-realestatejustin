/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	InspectorControls,
	useBlockProps,
	InnerBlocks,
	MediaUpload,
	MediaUploadCheck,
	RichText,
	URLInput
} from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	__experimentalInputControl as InputControl,
	TextControl,
} from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const {
		section_style,
		section_class,
		section_id,
		section_image,
		section_image_alt,
		section_image_class,
		section_image_style,
		section_block,
		container_style,
		container_class,
		container_id,
		row_style,
		row_class,
		row_id,
		main_col_content_class,
		main_col_content_style,
		main_col_content,
		columns,
	} = attributes;

	const [ value, setValue ] = useState( '' );

	const addColumn = () => {
		setAttributes( {
			columns: [
				...columns,
				{
					col_class: 'col-lg-5 column-resources',
					col_style: 'padding:20px;',
					col_id: '',
					inner_col_class:'position-relative',
					inner_col_style:'',
					data_aos:'',
					data_aos_delay:'',
					img: '',
					img_alt: '',
					img_class: '',
					img_style: '',
					title: '',
					content: '',
					url: '',
					link_target:'',
					link_title:''
				},
			],
		} );
	};

	const updateColumn = ( columnIndex, field, value ) => {
		setAttributes( {
			columns: columns.map( ( column, index ) => {
				if ( index === columnIndex ) {
					return {
						...column,
						[ field ]: value,
					};
				}
				return column;
			} ),
		} );
	};


	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Section' ) } initialOpen={ false }>
					<InputControl
						label="Section Style"
						value={ section_style }
						onChange={ ( nextValue ) =>
							setAttributes( { section_style: nextValue } )
						}
					/>
					<InputControl
						label="Section Class"
						value={ section_class }
						onChange={ ( nextValue ) =>
							setAttributes( { section_class: nextValue } )
						}
					/>
					<InputControl
						label="Section ID"
						value={ section_id }
						onChange={ ( nextValue ) =>
							setAttributes( { section_id: nextValue } )
						}
					/>
				</PanelBody>
				<PanelBody
					title={ __( 'Background Image' ) }
					initialOpen={ false }
				>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ ( media ) =>
								setAttributes( { section_image: media.url,section_image_alt: media.alt } )
							}
							type="image"
							allowedTypes={ [ 'image' ] }
							value={ section_image }
							render={ ( { open } ) => (
								<div>
									{ section_image && (
										<Button
											isLink
											isDestructive
											onClick={ () =>
												setAttributes( {
													section_image: '',
												} )
											}
										>
											{ __( 'Remove Section Image' ) }
										</Button>
									) }
									<Button
										onClick={ open }
										icon="upload"
										className="editor-media-placeholder__button is-button is-default is-large"
									>
										{ __( 'Select Section Image' ) }
									</Button>
								</div>
							) }
						/>
					</MediaUploadCheck>

					<InputControl
						label="Background Image Class"
						value={ section_image_class }
						onChange={ ( nextValue ) =>
							setAttributes( { section_image_class: nextValue } )
						}
					/>
					<InputControl
						label="Background Image Style"
						value={ section_image_style }
						onChange={ ( nextValue ) =>
							setAttributes( { section_image_style: nextValue } )
						}
					/>
				</PanelBody>
				<PanelBody title={ __( 'Code Block' ) } initialOpen={ false }>
					{ /* <InputControl
						label="Code Block"
						value={section_block}
						onChange={(nextValue) => setAttributes({ section_block: nextValue })}
					/> */ }
					<label style={ { lineHeight: '2' } }>Code Block</label>
					<textarea
						id="sectionStyleTextarea"
						value={ attributes.section_block }
						onChange={ ( event ) =>
							setAttributes( {
								section_block: event.target.value,
							} )
						}
						placeholder="Enter section block here"
						style={ { width: '100%', height: '100px' } }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Container' ) } initialOpen={ false }>
					<InputControl
						label="Container Section Style"
						value={ container_style }
						onChange={ ( nextValue ) =>
							setAttributes( { container_style: nextValue } )
						}
					/>
					<InputControl
						label="Container Section Class"
						value={ container_class }
						onChange={ ( nextValue ) =>
							setAttributes( { container_class: nextValue } )
						}
					/>
					<InputControl
						label="Container Section ID"
						value={ container_id }
						onChange={ ( nextValue ) =>
							setAttributes( { container_id: nextValue } )
						}
					/>
				</PanelBody>
				<PanelBody title={ __( 'Row' ) } initialOpen={ false }>
					<InputControl
						label="Row Style"
						value={ row_style }
						onChange={ ( nextValue ) =>
							setAttributes( { row_style: nextValue } )
						}
					/>
					<InputControl
						label="Row Class"
						value={ row_class }
						onChange={ ( nextValue ) =>
							setAttributes( { row_class: nextValue } )
						}
					/>
					<InputControl
						label="Row ID"
						value={ row_id }
						onChange={ ( nextValue ) =>
							setAttributes( { row_id: nextValue } )
						}
					/>
				</PanelBody>
				
				<PanelBody
					title={ __( 'Column Settings' ) }
					initialOpen={ false }
				>
					<InputControl
						label="Column Class"
						value={ main_col_content_class }
						onChange={ ( nextValue ) =>
							setAttributes( { main_col_content_class: nextValue } )
						}
					/>
					<InputControl
						label="Column Style"
						value={ main_col_content_style }
						onChange={ ( nextValue ) =>
							setAttributes( { main_col_content_style: nextValue } )
						}
					/>
					<button onClick={ () => addColumn() }>
						Add New Column
					</button>
				</PanelBody>
			</InspectorControls>
			<section { ...useBlockProps() }>
				<img src={ section_image } alt="" />
				{ console.log( section_image ) }
				<div className="column-wrapper" style={{background:'#f7f7f7',marginBottom:'10px',padding:'25px'}}>
				<InnerBlocks />
					{ columns.map( ( column, index ) => {
						return (
							<div className={ `column ${ column.col_class }` } style={{marginBottom:'25px'}}>
								<div style={{display:'flex'}}>

								<div>
								<label>Column Class</label><br></br>
								<input
									type="text"
									value={ column.col_class }
									onChange={ ( content ) =>
										updateColumn(
											index,
											'col_class',
											content.target.value
										)
									}
								/>
								</div>

								<div>
								<label>Column Style</label><br></br>
								<input
									type="text"
									value={ column.col_style }
									onChange={ ( content ) =>
										updateColumn(
											index,
											'col_style',
											content.target.value
										)
									}
								/>
								</div>

								<div>
								<label>Column ID</label><br></br>
								<input
									type="text"
									value={ column.col_id }
									onChange={ ( content ) =>
										updateColumn(
											index,
											'col_id',
											content.target.value
										)
									}
								/>
								</div>

								</div>
								<div style={{display:'flex'}}>
									<div>
									<label>Inner Column Class</label><br></br>
									<input
										type="text"
										value={ column.inner_col_class }
										onChange={ ( content ) =>
											updateColumn(
												index,
												'inner_col_class',
												content.target.value
											)
										}
									/>
									</div>
									<div>
									<label>Inner Column Style</label><br></br>
									<input
										type="text"
										value={ column.inner_col_style }
										onChange={ ( content ) =>
											updateColumn(
												index,
												'inner_col_style',
												content.target.value
											)
										}
									/>
									</div>
								</div>
								<div style={{display:'flex'}}>
									<div>
									<label>Data AOS</label><br></br>
									<input
										type="text"
										value={ column.data_aos }
										onChange={ ( content ) =>
											updateColumn(
												index,
												'data_aos',
												content.target.value
											)
										}
									/>
									</div>
									<div>
									<label>Data AOS Delay</label><br></br>
									<input
										type="text"
										value={ column.data_aos_delay }
										onChange={ ( content ) =>
											updateColumn(
												index,
												'data_aos_delay',
												content.target.value
											)
										}
									/>
									</div>
								</div>
								<img 
									src={column.img}
									style={{width:'250px:',height:'200px'}}
								/>
								<MediaUploadCheck>
						<MediaUpload
							onSelect={ ( media ) => 
								updateColumn(index, 'img', media.url)
							}
							type="image"
							allowedTypes={ [ 'image' ] }
							value={ column.img }
							render={ ( { open } ) => (
								<div>
									{ column.img && (
										<Button
											isLink
											isDestructive
											onClick={ () => {
												updateColumn(index, 'img', '')
											}}
										>
											{ __( 'Remove Col Image' ) }
										</Button>
									) }
									<Button
										onClick={ open }
										icon="upload"
										className="editor-media-placeholder__button is-button is-default is-large"
									>
										{ __( 'Select Col Image' ) }
									</Button>
								</div>
							) }
						/>
					</MediaUploadCheck>
					<div style={{display:'flex'}}>
						<div>
						<label>Image Class</label><br></br>
						<input
							type="text"
							value={ column.img_class }
							onChange={ ( content ) =>
								updateColumn(
									index,
									'img_class',
									content.target.value
								)
							}
						/>
						</div>
						<div>
						<label>Image Style</label><br></br>
						<input
							type="text"
							value={ column.img_style }
							onChange={ ( content ) =>
								updateColumn(
									index,
									'img_style',
									content.target.value
								)
							}
						/>
						</div>
					</div>
								<h2>Add Title Below</h2>
								<RichText
									value={ column.title }
									onChange={ ( content ) =>
										updateColumn( index, 'title', content )
									}
									placeholder={ __( 'Column Title' ) }
								/>
								{/* <textarea 
								value={ column.content }
								onChange={ ( content ) =>
									updateColumn( index, 'content', content.target.value )
								}
								placeholder={ __( 'Column Content' ) }
								/> */}
								{/* <div style={{display: 'flex'}}>
								<div>
								<label>{__('Column Link')}</label>
								<URLInput
									value={column.url}
									onChange={(newUrl) => updateColumn(index, 'url', newUrl)}
								/>
								</div>
								<TextControl
									label={__('Column Link Target')}
									value={column.link_target}
									onChange={(value) => updateColumn(index, 'link_target', value)}
								/>
								<TextControl
									label={__('Column Link Title')}
									value={column.link_title}
									onChange={(value) => updateColumn(index, 'link_title', value)}
								/>
								</div> */}
								
								<br></br>
								<Button
								style={{border:'1px solid'}}
								onClick={() => {
									const newColumns = [...columns]; // Create a copy of the columns array
									const newColumn = { // Define a new column object
										col_class: '',
										col_style: '',
										col_id: '',
										data_aos: 'fade-up',
										data_aos_delay: '',
										title: 'new column',
										content: 'new column content',
										url: '',
										link_target:'',
										link_title:''
									};
									newColumns.splice(index, 0, newColumn); // Insert the new column at the current index
									setAttributes({ columns: newColumns }); // Update the columns attribute with the new array
								}}
							>
								{__('Add Column Above')}
							</Button>
							<Button
							style={{border:'1px solid'}}
							isDestructive
							onClick={() => {
								const newColumns = [...columns];
								newColumns.splice(index, 1);
								setAttributes({ columns: newColumns });
							}}
							>
								{__('Remove Column')}
							</Button>
							</div>
						);
					} ) }
				</div>
			</section>
		</>
	);
}
