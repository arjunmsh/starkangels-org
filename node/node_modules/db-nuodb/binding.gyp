{
        "targets": [
                {
                        "target_name": "nuodb_bindings",
                        "sources": [
                                "lib/node-db/binding.cc", 
                                "lib/node-db/connection.cc",
                                "lib/node-db/events.cc", 
                                "lib/node-db/exception.cc",
                                "lib/node-db/query.cc", 
                                "lib/node-db/result.cc", 
                                "src/node_db_nuodb_bindings.cc", 
                                "src/node_db_nuodb.cc",
                                "src/node_db_nuodb_connection.cc", 
                                "src/node_db_nuodb_query.cc",
                                "src/node_db_nuodb_result.cc"
                        ],
                        "cflags!": [ 
                                "-fno-exceptions" 
                        ],
                        "cflags_cc!": [ 
                                "-fno-exceptions" 
                        ],
                        "conditions": [
                                ["OS=='linux'", {
                                        "variables": {
                                            "nuodb_home": '<!(echo ${NUODB_HOME-"/opt/nuodb"})'
                                        },
                                        "cflags": [
                                                "-Wall",
                                                "-w"
                                        ],
                                        "link_settings": {
                                                "libraries": [
                                                           "-Wl,-rpath,<(nuodb_home)/lib64",
                                                           "-L<(nuodb_home)/lib64",
                                                           "-lNuoRemote"
                                                ],
                                                "include_dirs": [
                                                           "<(nuodb_home)/lib64"
                                                ]
                                        },
                                        "include_dirs": [
                                                "lib",
                                                "<(nuodb_home)",
                                                "<(nuodb_home)/lib64",
                                                "<(nuodb_home)/include"
                                        ]
                                }],
                                ["OS=='mac'", {
                                        "variables": {
                                            "nuodb_home": '<!(echo ${NUODB_HOME-"/opt/nuodb"})'
                                        },
                                        "xcode_settings": {
                                                "LD_RUNPATH_SEARCH_PATHS": [
                                                        "<(nuodb_home)/lib64"
                                                ],
                                                "GCC_ENABLE_CPP_EXCEPTIONS": "YES",
                                                "WARNING_CFLAGS!": [
                                                        "-Wall",
                                                        "-W",
                                                ]
                                        },
                                        "link_settings": {
                                                "libraries": [
                                                           "-L<(nuodb_home)/lib64",
                                                           "-lNuoRemote"
                                                ],
                                                "include_dirs": [
                                                           "<(nuodb_home)/lib64"
                                                ]
                                        },
                                        "include_dirs": [
                                                "lib",
                                                "<(nuodb_home)",
                                                "<(nuodb_home)/lib64",
                                                "<(nuodb_home)/include"
                                        ]
                                }],
                                ["OS=='solaris'", {
                                        "variables": {
                                            "nuodb_home": '<!(echo ${NUODB_HOME-"/opt/nuodb"})'
                                        },
                                        "cflags": [
                                                "-Wall",
                                                "-W"
                                        ],
                                        "link_settings": {
                                                "libraries": [
                                                           "-Wl,-rpath,<(nuodb_home)/lib64",
                                                           "-L<(nuodb_home)/lib64",
                                                           "-lNuoRemote"
                                                ],
                                                "include_dirs": [
                                                           "<(nuodb_home)/lib64"
                                                ]
                                        },
                                        "include_dirs": [
                                                "lib",
                                                "<(nuodb_home)",
                                                "<(nuodb_home)/lib64",
                                                "<(nuodb_home)/include"
                                        ]
                                }]
                        ]
                }
        ]
}