import { Renderer } from "@k8slens/extensions";
import React from "react";

const {
  Component: { DrawerItem, DrawerTitle, Table, TableRow, TableCell },
} = Renderer;

export class NamespaceCostDetails extends React.Component<
  Renderer.Component.KubeObjectDetailsProps<Renderer.K8sApi.Namespace>,
  { cost: any }
> {
  constructor(
    props: Renderer.Component.KubeObjectDetailsProps<Renderer.K8sApi.Namespace>
  ) {
    super(props);
    this.state = { cost: {} };
  }

  async componentDidMount() {
    fetch(
      "http://localhost:9090/model/allocation?window=1d&aggregate=namespace&accumulate=true"
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          cost: result.data[0],
        });
      });
  }

  render() {
    let totalCost = 0;
    let cpuCost = 0;
    let ramCost = 0;
    let pvCost = 0;
    let gpuCost = 0;
    let networkCost = 0;
    let lbCost = 0;

    if (this.state.cost[this.props.object.getName()]) {
      let model = this.state.cost[this.props.object.getName()];
      cpuCost = model.cpuCost.toFixed(2);
      ramCost = model.ramCost.toFixed(2);
      pvCost = model.pvCost.toFixed(2);
      gpuCost = model.gpuCost.toFixed(2);
      networkCost = model.networkCost.toFixed(2);
      lbCost = model.loadBalancerCost.toFixed(2);
      totalCost = model.totalCost.toFixed(2);
    } else {
      return (
        <div>
          <DrawerTitle title="Costs (last 24H)" />
          <Table>
            <TableRow key="0" nowrap>
              Metrics not available.
            </TableRow>
          </Table>
        </div>
      );
    }

    return (
      <div>
        <DrawerTitle title="Costs (last 24H)" />
        <Table>
          <TableRow key="0" nowrap>
            <TableCell className="podName">CPU: </TableCell>
            <TableCell className="podName">$ {cpuCost}</TableCell>
          </TableRow>
          <TableRow key="1" nowrap>
            <TableCell className="podName">RAM:</TableCell>
            <TableCell className="podName">$ {ramCost}</TableCell>
          </TableRow>
          <TableRow key="2" nowrap>
            <TableCell className="podName">GPU:</TableCell>
            <TableCell className="podName">$ {gpuCost}</TableCell>
          </TableRow>
          <TableRow key="3" nowrap>
            <TableCell className="podName">PV:</TableCell>
            <TableCell className="podName">$ {pvCost}</TableCell>
          </TableRow>
          <TableRow key="4" nowrap>
            <TableCell className="podName">LB:</TableCell>
            <TableCell className="podName">$ {lbCost}</TableCell>
          </TableRow>
          <TableRow key="5" nowrap>
            <TableCell className="podName">Network:</TableCell>
            <TableCell className="podName">$ {networkCost}</TableCell>
          </TableRow>
          <TableRow key="6" nowrap>
            <TableCell className="podName">Total:</TableCell>
            <TableCell className="podName">$ {totalCost}</TableCell>
          </TableRow>
        </Table>
      </div>
    );
  }
}
