import { Component, K8sApi } from "@k8slens/extensions";
import React from "react";

export class NamespaceDetailsItem extends React.Component<Component.KubeObjectDetailsProps<K8sApi.Namespace>, {cost: any}> {
 
    constructor(props: Component.KubeObjectDetailsProps<K8sApi.Namespace>) {
        super(props)
        this.state = {cost: {}}
    }
  async componentDidMount() {
    console.log("NAMESPACE:" + this.props.object.getName())
    fetch("http://localhost:9090/model/allocation?window=1d&aggregate=namespace")
    .then(res => res.json())
    .then((result) => {
        this.setState({
            cost: result.data[0]
        })
    })


  }

  render() {
    console.log(this.props.object.getName())
    let totalCost = 0
    let cpuCost = 0
    let ramCost = 0
    let pvCost = 0
    let gpuCost = 0
    let networkCost = 0
    let lbCost = 0


    if (this.state.cost[this.props.object.getName()]) {
        let model = this.state.cost[this.props.object.getName()]
        cpuCost = model.cpuCost.toFixed(2)
        ramCost = model.ramCost.toFixed(2)
        pvCost = model.pvCost.toFixed(2)
        gpuCost = model.gpuCost.toFixed(2)
        networkCost = model.networkCost.toFixed(2)
        lbCost = model.loadBalancerCost.toFixed(2)
        totalCost = model.totalCost.toFixed(2)
    } 
    return (
      <div>
        <Component.DrawerTitle title="Costs" />
        <div >
              <Component.Table>
                  <Component.TableRow key="0" nowrap>
                    <Component.TableCell className="podName">CPU: </Component.TableCell>
                    <Component.TableCell className="podName">$ {cpuCost}</Component.TableCell>
                  </Component.TableRow>
                  <Component.TableRow key="1" nowrap>
                    <Component.TableCell className="podName">RAM:</Component.TableCell>
                    <Component.TableCell className="podName">$ {ramCost}</Component.TableCell>
                  </Component.TableRow>
                  <Component.TableRow key="2" nowrap>
                    <Component.TableCell className="podName">GPU:</Component.TableCell>
                    <Component.TableCell className="podName">$ {gpuCost}</Component.TableCell>
                  </Component.TableRow>
                  <Component.TableRow key="3" nowrap>
                    <Component.TableCell className="podName">PV:</Component.TableCell>
                    <Component.TableCell className="podName">$ {pvCost}</Component.TableCell>
                  </Component.TableRow>
                  <Component.TableRow key="4" nowrap>
                    <Component.TableCell className="podName">LB:</Component.TableCell>
                    <Component.TableCell className="podName">$ {lbCost}</Component.TableCell>
                  </Component.TableRow>
                  <Component.TableRow key="5" nowrap>
                    <Component.TableCell className="podName">Network:</Component.TableCell>
                    <Component.TableCell className="podName">$ {networkCost}</Component.TableCell>
                  </Component.TableRow>
                  <Component.TableRow key="6" nowrap>
                    <Component.TableCell className="podName">Total:</Component.TableCell>
                    <Component.TableCell className="podName">$ {totalCost}</Component.TableCell>
                  </Component.TableRow>
              </Component.Table>
          </div>

      </div>
    )
  }
}
