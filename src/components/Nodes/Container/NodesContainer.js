import React, { useState } from 'react';
import Node from '../Node/node';
import { cloneDeep } from 'lodash';

import Editor from '../../editor/editor';

let _rootNode;
const NodesContainer = () => {

    let [rootNode, setRootNode] = useState({ key: null, left: null, right: null });

    const addNode = (node, nodeValue) => {

        // duplicate nodevalue not allowd
        if (node.key === nodeValue) return;

        if (node.key === null) {
            node.key = nodeValue;
            node.left = null;
            node.right = null;

            return setRootNode(_rootNode);
        }
        // insert to the right
        if (parseInt(nodeValue) > parseInt(node.key)) {
            if (node.right) {
                // continue searching
                addNode(node.right, nodeValue);
            } else {
                // right node is terminus: initialize right node, next iteration is the last one.
                node.right = { key: null };
                addNode(node.right, nodeValue);
            }
        } else {
            if (node.left) {
                addNode(node.left, nodeValue);
            } else {
                node.left = { key: null };
                addNode(node.left, nodeValue);
            }
        }
    }

    const addNodeHandler = (keyValue) => {
        _rootNode = cloneDeep(rootNode);
        addNode(_rootNode, keyValue);
    }

    return (
        <React.Fragment>
            <Editor addNode={addNodeHandler} />
            <Node node={rootNode} />
        </React.Fragment>
    )
}

export default NodesContainer;