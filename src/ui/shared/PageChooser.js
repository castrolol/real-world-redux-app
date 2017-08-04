import React from 'react';

import { Menu } from 'semantic-ui-react';


class PageChooser extends React.Component {

    collapsePages(pageCount, current, numVisiblePages, pages) {

        if (pageCount >= numVisiblePages) {
            var allPages = pages;
            pages = [];

            if (Math.ceil(numVisiblePages / 2) >= current) {

                for (var i = 0; i < numVisiblePages - 2; i++) {
                    pages.push(i + 1);
                }

                pages.push("...");
                pages.push(pageCount);

            } else {

                if ((pageCount - Math.ceil(numVisiblePages / 2)) <= current) {

                    var last = numVisiblePages - 2;

                    pages.push(1);
                    pages.push("...");

                    for (var i = 0; i < numVisiblePages - 2; i++) {
                        pages.push((pageCount - last) + (i + 1));
                    }

                } else {

                    pages.push(1);
                    pages.push("...");

                    var steps = Math.floor((numVisiblePages - 4) / 2);
                    for (var i = 0; i < steps; i++) {
                        pages.push((current - steps) + i);
                    }

                    pages.push(current);

                    for (var i = 0; i < steps; i++) {
                        pages.push(current + (i + 1));
                    }

                    pages.push("...");
                    pages.push(pageCount);

                }

            }

        }

        return pages;
    }

    resolvePages() {

        const { pageCount, current, visiblePages } = this.props;

        const numVisiblePages = visiblePages || 11;

        var pages = [];

        for (var i = 0; i < pageCount; i++) {
            pages.push(i + 1);
        }

        pages = this.collapsePages(pageCount, current, numVisiblePages, pages);

        return {
            pageCount,
            current,
            pages
        }

    }

    handleItemClick(page) {
        this.props.onSelected(page);
    }

    renderItem(page) {

        const current = this.props.current;

        if (page == "...") {
            return (
                <Menu.Item disabled >
                    ...
                </Menu.Item>
            );
        }

        return (
            <Menu.Item
                name={page}
                active={page == current}
                onClick={() => this.handleItemClick(page)} />
        );
    }

    render() {
        const { right } = this.props;
        const { pages, current } = this.resolvePages();

        var floated = undefined;

        if (right) {
            floated = "right";
        }

        return (
            <Menu compact floated={floated} size="mini" pagination>
                {pages.map(page => this.renderItem(page))}
            </Menu>
        );

    }

}


export default PageChooser;