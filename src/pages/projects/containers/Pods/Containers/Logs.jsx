/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */

import React from 'react'
import { observer } from 'mobx-react'
import { get } from 'lodash'

import { Card, Empty } from 'components/Base'
import LogStore from 'stores/logging/query'
import LogCard from 'components/Cards/LogQuery'
import ContainerLog from 'components/Cards/ContainerLog'

@observer
class Logs extends React.Component {
  get store() {
    return this.props.detailStore
  }

  get isLogEnabled() {
    return globals.app.hasKSModule('logging')
  }

  constructor(props) {
    super(props)

    if (this.isLogEnabled) {
      const { namespace: namespaces } = this.store.detail
      const {
        containerName: containers,
        podName: pods,
      } = this.props.match.params

      this.logStore = new LogStore({
        pods,
        pathParams: {
          namespaces,
        },
        containers,
        size: 50,
        end_time: Date.now(),
      })
    }
  }

  render() {
    if (!this.isLogEnabled) {
      return <ContainerLog {...this.props.match.params} />
    }

    return get(this.store, 'detail.containerID') ? (
      <LogCard store={this.logStore} realTime />
    ) : (
      <Card>
        <Empty desc={'CONTAINER_REAL_TIME_LOGS_UNSUPPORTED_TIPS'} />
      </Card>
    )
  }
}

export default Logs