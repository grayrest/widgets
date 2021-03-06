import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';
import ThemedMixin, { theme } from '@dojo/framework/widget-core/mixins/Themed';
import { DNode } from '@dojo/framework/widget-core/interfaces';

import * as css from '../theme/grid-footer.m.css';

export interface FooterProperties {
	total?: number;
	page: number;
	pageSize: number;
}

@theme(css)
export default class Footer extends ThemedMixin(WidgetBase)<FooterProperties> {
	protected render(): DNode {
		const { total, page, pageSize } = this.properties;
		const footer =
			total !== undefined
				? `Page ${page} of ${Math.ceil(total / pageSize)}. Total rows ${total}`
				: `Page ${page} of ?`;
		return v('div', { classes: this.theme(css.root) }, [footer]);
	}
}
