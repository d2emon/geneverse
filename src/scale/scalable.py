class Scalable:
    def __init__(self, name, size, scale=1):
        while size > 1000:
            scale += 3
            size /= 1000

        self.name = name
        self.size = size
        self.scale = scale

    def __repr__(self):
        return "{} ({} * 10^{}m)".format(self.name, self.size, self.scale)
