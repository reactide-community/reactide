import { List, Icon } from 'semantic-ui-react';
import * as React from 'react';
import { readdir, statSync } from 'fs';
import { join } from 'path';
import { ReactIDE } from '../ReactIDE';

class Directory extends React.Component<{ path: string }, { files: { name: string, path: string, type: string }[], open: number[] }> {
    constructor(props) {
        super(props);
        this.state = { files: [], open: [] };
    }
    render() {
        return (
            <List>
                {this.state.files.map((file, key) => {
                    return (
                        <List.Item key={key}>
                            <List.Content floated="left" onClick={this.onClick.bind(this, file, key)}>
                                {file.name}
                            </List.Content>
                            <List.Content floated="right">
                                {file.type == 'dir' && <Icon onClick={this.onClick.bind(this, file, key)} name={this.state.open.indexOf(key) > -1 ? 'caret down' : 'caret right'} />}                            </List.Content>
                            <List.Content style={{paddingLeft: 10}}>
                                {this.state.open.indexOf(key) > -1 && <Directory path={file.path} />}
                            </List.Content>
                        </List.Item>
                    );
                })}
                {
                    this.state.files.length == 0 && 
                    <List.Item>
                        No Items
                    </List.Item>
                }
            </List>
        )
    }
    onClick(file, key) {
        if(file.type === 'dir') {
            this.toggleFolder(key);
        } else {
            ReactIDE.Editor.open(file.path);
        }
    }
    toggleFolder(index) {
        var open = this.state.open;
        var i = open.indexOf(index);
        if (i > -1) {
            open.splice(i, 1);
        } else {
            open.push(index);
        }
        console.log(open);
        this.setState({ open });
    }
    componentDidMount() {
        readdir(this.props.path, (err, files) => {
            this.setState({
                files: files.map((file) => {
                    return {
                        name: file,
                        path: join(this.props.path, file),
                        type: statSync(join(this.props.path, file)).isDirectory() ? 'dir' : 'file'
                    };
                })
            });
        });
    }
}

export default class FileExplorer extends React.Component<any, any> {
    render() {
        return (
            <Directory path="." />
        );
    }
}