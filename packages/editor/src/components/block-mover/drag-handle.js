/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { IconButton, Draggable } from '@wordpress/components';

export const IconDragHandle = ( { isVisible, className, icon, label, onFocus, onBlur, onDragStart, onDragEnd, blockElementId, order, rootClientId, clientId, layout } ) => {
	if ( ! isVisible ) {
		return null;
	}

	const dragHandleClassNames = classnames( 'editor-block-mover__control-drag-handle', className );

	return (
		<Draggable
			elementId={ blockElementId }
			transferData={ {
				type: 'block',
				fromIndex: order,
				rootClientId,
				clientId,
				layout,
			} }
			onDragStart={ onDragStart }
			onDragEnd={ onDragEnd }
		>
			{
				( { onDraggableStart, onDraggableEnd } ) => (
					<IconButton
						className={ dragHandleClassNames }
						icon={ icon }
						label={ label }
						onFocus={ onFocus }
						onBlur={ onBlur }
						onDragStart={ onDraggableStart }
						onDragEnd={ onDraggableEnd }
						draggable
					/>
				) }
		</Draggable>
	);
};